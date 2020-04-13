import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * @component functional
 * @name UseResources
 * @description
 * @author adam.caldwell
 * @extends {React.Component}
 */
const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
