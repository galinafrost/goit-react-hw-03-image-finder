import { Component } from 'react';
import PropTypes from 'prop-types';

import style from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({target}) => {
      const {name, value} = target 
      this.setState({
          [name]: value
      })
  }

  handleSubmit = (e)  => {
      e.preventDefault()
      this.props.onSubmit(this.state)
      this.reset()
  }

  reset() {
    this.setState({
        search: ""
    })
}

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this

    return (
      <header className="searchbar">
        <form onSubmit={handleSubmit} className={style.form}>
          <button type="submit" className={style.btn}>
            <span className="button-label">Поиск</span>
          </button>

          <input
          onChange={handleChange}
            className={style.input}
            value={search}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Поиск картинок"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  search: PropTypes.string
}