import React, { useState, useEffect } from 'react';
import { DeviceEventEmitter } from 'react-native';

import Toolbar from '~/components/Toolbar';
import Loader from '~/components/Loader';
import List from '~/components/List';
import Fab from '~/components/Fab';
import { Container, RefreshView } from '~/components/containers';
import { Users } from '~/services/api';

const Home = ({ navigation, route }) => {
  const [users, setUsers] = useState(route.params?.users || []);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setUsers(await Users.get());
    setLoading(false);
  }

  const forceRefresh = () => {
    setLoading(true);
    fetchData();
  }

  useEffect(() => {
    fetchData();
    DeviceEventEmitter.addListener('force-refresh', forceRefresh);

    return () => {
      DeviceEventEmitter.removeAllListeners('force-refresh');
    }
  }, [])

  return (
    <Container>
      <Toolbar title="Home" logoff />
      {loading ? <Loader /> : (
        <RefreshView onRefresh={fetchData}>
          <List data={users} sort="username" />
        </RefreshView>
      )}

      <Fab
        onPress={() => navigation.navigate('Create')}
        icon="add"
      />
    </Container>
  )
}

export default Home;
