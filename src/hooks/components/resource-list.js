import React from 'react';
import useResources from './use-resources';

/**
 * @component functional
 * @name ResourceList
 * @description
 * @author adam.caldwell
 * @extends {React.Component}
 */
const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  /*
  const [resources, setResources] = useState([]);
  const fetchResource = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  };

  // must put in either an empty array or some value to monitor to prevent infinitely repeated calls to the
  // requested method
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);
  */

  /*
 // with useEffect all-in-one
  const [resources, setResources] = useState([]);
  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

      setResources(response.data);
    })(resource);
  }, [resource]);
  */

  /* this is the class based equivalent of 'useEffect()' 
  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
      this.setState({ resources: response.data });
    }
  } */

  return (
    <ul>
      {resources.map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
