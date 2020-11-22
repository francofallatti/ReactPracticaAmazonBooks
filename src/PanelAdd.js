import React from 'react';

class PanelAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      image: '',
      rating: 1,
    };
  }

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  onChangeImage = (e) => {
    this.setState({ image: e.target.value });
  };
  onChangeRating = (e) => {
    this.setState({ rating: parseInt(e.target.value) });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const title = this.state.title;
    const image = this.state.image;
    const rating = this.state.rating;

    this.props.onAdd({ title: title, image: image, rating: rating });
    this.props.onCancel();
  };

  render() {
    return (
      <div className='new-item-panel-container'>
        <div className='new-item-panel'>
          <form onSubmit={this.onSubmit} action=''>
            <p>
              <label>Titulo del libro</label>
              <input
                onChange={this.onChangeTitle}
                type='text'
                name='title'
                className='input'
              />
            </p>

            <p>
              <label>Nombre de imagen</label>
              <input
                onChange={this.onChangeImage}
                type='text'
                name='image'
                className='input'
              />
            </p>

            <p>
              <label>Calificacion</label>
              <select onChange={this.onChangeRating} name='' id=''>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </p>
            <input
              type='submit'
              className='button btn-blue'
              value='registrar libro'
            />
            <button onClick={this.props.onCancel} className='button btn-normal'>
              Cancelar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PanelAdd;
