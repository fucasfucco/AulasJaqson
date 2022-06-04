import React from "react";
const AtividadeForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setAtividade({ ...props.atividade, [name]: value });
  };
  return (
    <form>
      <div class="form-group">
        <label>Titulo</label>
        <input
          class="form-control"
          type="text"
          name="titulo"
          value={props.atividade.titulo}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <label>Descrição</label>
        <input
          class="form-control"
          type="text"
          name="descricao"
          value={props.atividade.descricao}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <label>Status</label>
        <input
          class="form-control"
          type="text"
          name="status"
          value={props.atividade.status}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <label>prazo</label>
        <input
          class="form-control"
          type="date"
          name="prazo"
          value={props.atividade.prazo}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <label>Inicio da Agenda</label>
        <input
          class="form-control"
          type="date"
          name="agendaInicio"
          value={props.atividade.agendaInicio}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <label>Data de Término</label>
        <input
          class="form-control"
          type="date"
          name="dataHoraTermino"
          value={props.atividade.dataHoraTermino}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <button
          type="button"
          onClick={props.salvar}
          className="btn btn-primary btn-sm"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={props.cancelar}
          className="btn btn-primary btn-sm"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
export default AtividadeForm;
