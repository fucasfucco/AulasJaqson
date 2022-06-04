import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const SolicitanteList = (props) => {

    const template = (rowData) => {
        return (<div> <Button className="p-button-raised p-button-danger" onClick={() => props.editar(rowData._id)} className="btn btn-warning btn-sm"> Editar </Button>
            <Button onClick={() => props.excluir(rowData._id)} className="btn btn-danger btn-sm"> Excluir </Button>
        </div>
        )
    }

    return (
        <div className="App">
            <h4>Listagem de Solicitantees</h4>
            <Button
                className="btn btn-primary btn-sm"
                onClick={props.onClickAtualizar}
            >
                Atualizar Lista
            </Button>
            <Button className="btn btn-success btn-sm" onClick={props.inserir}>
                Inserir
            </Button>


            <DataTable value={props.solicitantes} paginator responsiveLayout="scroll" rows={5}
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando {last} solicitantees de {totalRecords}" rowsPerPageOptions={[10, 20, 50]}
                selectionMode="single" selection={props.solicitante} onSelectionChange={e => props.setSolicitante(e.value)} dataKey="_id" emptyMessage="Nenhum solicitante encontrado">
                <Column field="_id" header="Id" sortable ></Column>
                <Column field="nome" header="Nome" sortable filter></Column>
                <Column field="email" header="Email" sortable filter></Column>
                <Column header="Operações" body={template}>
                </Column>
            </DataTable>


        </div>
    );
};
export default SolicitanteList;
