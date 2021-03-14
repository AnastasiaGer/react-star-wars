import {useEffect, useState} from 'react'
import PropTypes from 'prop-types';

import { withErrorApi } from '../../hoc-helpers/withErrorApi.jsx';

import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import {getPeopleID, getPeopleImage} from '../../services/getPeopleData'

import {getApiResource} from '../../utils/network'
import { API_PEOPLE} from '../../constants/api'

import styles from './PeoplePage.module.css';


const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
      const res = await getApiResource(url);

      if (res) {
          const peopleList = res.results.map(({ name, url }) => {
              const id = getPeopleID(url);
              const img = getPeopleImage(id);
  
              return {
                  id,
                  name,
                  img
              }
          })
          
          setPeople(peopleList);
          setErrorApi(false);
      } else {
          setErrorApi(true);
      }
  }

  useEffect(() => {
      getResource(API_PEOPLE);
  }, []);

  return (
      <>
          <h1>Navigation</h1>
          {people && <PeopleList people={people} />}
      </>
  )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);