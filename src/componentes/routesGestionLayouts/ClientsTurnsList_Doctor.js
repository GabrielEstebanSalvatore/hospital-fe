import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/authentication/authContext';
import proyectContext from '../../context/projects/proyectContext';
import { Table } from 'antd';
import { Input, Button, Space } from 'antd';
//import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const ClientsTurnsList_Doctor = () => {
    
  const authContext = useContext(AuthContext);
  const { cliente,email } = authContext;

  //Extraer Turnos de state inicial
  const proyectosContext = useContext(proyectContext);
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
   
  };

  const handleReset = clearFilters => {
    clearFilters();
    //this.setState({ ...turno,searchText: '' });
  };

  const columns = [
    { title: 'Paciente', dataIndex: 'name', key: 'name', ...buscarDatoTabla('name') },
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
            doctor: 'Gabriel Salvatore',
            tipoTurno: turno.tipoTurno,
            fecha: turno.fecha
          }
        
    })
  }

  return (
    <div className="tabla">
      <div className="barra_usuario_nombre">
        </div>
          <Table
            columns={columns}
            dataSource={getRow()}
            pagination={{ position: [pagination.bottom] }}
          />
    </div>
  )
}

export default ClientsTurnsList_Doctor