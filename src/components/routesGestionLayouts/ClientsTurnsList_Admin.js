import React, { useContext, useEffect, useState } from 'react';
import clienteAxios from '../../config/axios';
import proyectContext from '../../context/projects/proyectContext';
import { saveAs } from 'file-saver';
import { Table } from 'antd';
import { DeleteOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'


import { Input, Button, Space } from 'antd';
//import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const ListadoTurnosClientes = () => {

  //Extraer Turnos de state inicial
  const proyectosContext = useContext(proyectContext);
  const { eliminarTurno, turnosClientes, cantidadDeTurnosClientes } = proyectosContext;

  // Obtener proyectos cuando carga el componente
  useEffect(() => {

    cantidadDeTurnosClientes()
  }, []);

  const [turno, setTurno] = useState({
    name: '',
    tipoTurno: "",
    doctor: "",
    fecha: "",
    receiptId: "",
  })

  const [pagination] = useState({

    bottom: 'bottomCenter',
  })

  const [buscar, setBuscar] = useState({
    searchText: '',
    searchedColumn: ''
  })

  const buscarDatoTabla = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          /*ref={node => {
            this.searchInput = node;
          }}*/
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
              </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
              </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    /*onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },*/
    render: text =>
      buscar.searchedColumn === dataIndex ? (
        <Button
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[buscar.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
          text
        ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    /*this.setState({
        ...turno,
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });*/
  };

  const handleReset = clearFilters => {
    clearFilters();
    //this.setState({ ...turno,searchText: '' });
  };

  const columns = [
    { title: 'Cliente', dataIndex: 'name', key: 'name', ...buscarDatoTabla('name') },
    { title: 'Doctor', dataIndex: 'doctor', key: 'doctor', ...buscarDatoTabla('doctor') },
    { title: 'Tipo Turno', dataIndex: 'tipoTurno', key: 'tipoTurno', ...buscarDatoTabla('tipoTurno') },
    { title: 'Fecha', dataIndex: 'fecha' },
    {
      title: 'Acciones',
      key: 'actions',
      render: (text, record) => (
        <div className="listado-turnos__Footer">
          <i>

            <DeleteOutlined onClick={() => onClickEliminar(record.key)} style={{ color: 'red' }} />
          </i>
          <i>
            <VerticalAlignBottomOutlined className="VerticalAlignBottomOutlined" onClick={() => createAndDownloadPdf(record)} style={{ color: 'green' }} />
          </i>
        </div>
      )
    }
  ];

  //PDF
  const createAndDownloadPdf = async (turno) => {
    await clienteAxios.post('/create-pdf', turno)
      .then(() => clienteAxios.get('/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }
  //ARMAR LA TABLA
  const getRow = () => {
    return turnosClientes.map((turno) => {
      return {
        key: turno._id,
        name: turno.name,
        doctor: turno.doctor,
        tipoTurno: turno.tipoTurno,
        fecha: turno.fecha
      }
    })
  }
  //ELIMAR TURNO
  const onClickEliminar = (id) => {
    console.log(id);

    Swal.fire({
      title: '¿Estas seguro?',
      text: "!Si eliminas el turno, no lo podras recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.value) {
        eliminarTurno(id)
        Swal.fire(
          'Eliminado!',
          'El turno se eliminó correctamente.',
          'success'
        )
      }
    })

  }

  return (
    <div className="tabla">
      <Table
        columns={columns}
        dataSource={getRow()}
        pagination={{ position: [pagination.bottom] }}
      />
    </div>
  )
}

export default ListadoTurnosClientes