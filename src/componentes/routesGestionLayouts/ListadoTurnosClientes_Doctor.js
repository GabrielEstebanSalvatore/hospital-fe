import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import proyectoContext from '../../context/projects/proyectoContext';
import { Table } from 'antd';
import { Input, Button, Space } from 'antd';
//import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';



const ListadoTurnosClientes_Doctor = () => {
    
  const authContext = useContext(AuthContext);
  const { cliente,email } = authContext;
  


  //Extraer Turnos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const {  turnos,turnosClientes,obtenerTurnos_Doctores,turnosDoctores,obtenerTurnos } = proyectosContext;
 

  // Obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerTurnos_Doctores(email)
    
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
        
        </div>
      )
    }
  ];

 
  
  //ARMAR LA TABLA
  const getRow = () => {
    
    return turnosDoctores.map((turno) => {
       
          return {
            key: turno._id,
            name: turno.name,
            doctor: turno.doctorEmail,
            tipoTurno: turno.tipoTurno,
            fecha: turno.fecha
          }
        
    })
  }
    


   /*
  
   onSelectChange = (event) => {
        let value = event.target.value
        turnosDoctores.map(prov => {
            if (value == prov.id) {
                this.setState({ currentProviders: [prov], categoryId: value, showInput: false })
                return;
            }
            else {
                this.setState({ currentProviders: [], categoryId: value, showInput: false })
            }
            if (value == "") {
                this.setState({ currentProviders: [], categoryId: value, showInput: true })
            }
        })
    }
  
  
  
  */



  return (


    <div className="tabla">
      <div className="barra_usuario_nombre">

            </div>
    

      {/*turno.name != '' ? createAndDownloadPdf() : null*/}

      <Table
        columns={columns}
        dataSource={getRow()}
        pagination={{ position: [pagination.bottom] }}
      />
    </div>




  )
}

export default ListadoTurnosClientes_Doctor