/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    data,
    filterByName,
    getPlanetsApi,
    filteredPlanets,
    renderFilters,
    options,
    arrayInicialOptions,
    setOptions,
    setRenderFilters,
    setFilteredPlanets,
  } = useContext(PlanetsContext);

  const { name } = filterByName;

  useEffect(() => {
    getPlanetsApi();
  }, []);

  function handleRemoveBtn({ target }) {
    target.parentNode.remove();

    setOptions([...options, target.value]);
  }

  function handleRemoveAllFiltersBtn() {
    setRenderFilters([]);

    setOptions(arrayInicialOptions);

    setFilteredPlanets(data);
  }

  return (
    <section>
      <div className="filters">
        { renderFilters.map(({ column, comparison, value }, index) => (
          <div key={ index } className="filter-items">
            <p>{ column }</p>
            <p>{ comparison }</p>
            <p>{ value }</p>
            <button
              type="button"
              data-testid="filter"
              value={ column }
              onClick={ handleRemoveBtn }
              className="btn btn-x"
            >
              X
            </button>
          </div>
        )) }
        { renderFilters.length !== 0 ? (
          <button
            type="button"
            data-testid="button-remove-filters"
            onClick={ handleRemoveAllFiltersBtn }
            className="btn"
          >
            Remover filtros
          </button>) : '' }
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { filteredPlanets?.filter((planet) => planet.name.toLowerCase().includes(name))
            .map((obj) => (
              <tr key={ obj.name }>
                <td>{ obj.name }</td>
                <td>{ obj.rotation_period }</td>
                <td>{ obj.orbital_period }</td>
                <td>{ obj.diameter }</td>
                <td>{ obj.climate }</td>
                <td>{ obj.gravity }</td>
                <td>{ obj.terrain }</td>
                <td>{ obj.surface_water }</td>
                <td>{ obj.population }</td>
                <td>{ obj.films }</td>
                <td>{ obj.created }</td>
                <td>{ obj.edited }</td>
                <td>{ obj.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
