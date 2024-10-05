import css from './SearchBox.module.css';

import { useId } from 'react';
import { Formik, Field } from 'formik';

export default function SearchBox({ searchValue, setSearchValue }) {
  const searchInputId = useId();
  return (
    <Formik initialValues={searchValue} onSubmit={() => {}}>
      <div className={css.wrapper}>
        <label htmlFor={searchInputId}>Find contacts by name</label>
        <Field
          type="text"
          name="searchName"
          value={searchValue}
          id={searchInputId}
          onChange={event => setSearchValue(event.target.value)}
        />
      </div>
    </Formik>
  );
}
