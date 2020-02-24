import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Item from './Item';
import WarningModal from '~/components/WarningModal';
import { colors } from '~/constants';
import { Users } from '~/services/api';

const List = ({ data = [], sort }) => {
  const [delItem, setDelItem] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [text, setText] = useState(false);
  const [deleted, setDeleted] = useState([]);

  const filteredData = () => {
    return data.filter(({ id }) => !deleted.includes(id));
  }

  if (sort) {
    if (sort[0] === '-') {
      sort = sort.slice(1, sort.length);
      data = filteredData().sort((a, b) => {
        if (a[sort] > b[sort]) return -1;
        else if (a[sort] < b[sort]) return 1;
        else return 0;
      });
    } else {
      data = filteredData().sort((a, b) => {
        if (a[sort] < b[sort]) return -1;
        else if (a[sort] > b[sort]) return 1;
        else return 0;
      })
    }
  }

  const handleOpenModal = item => {
    setDelItem(item);
    setLoading(false);
    setError(false);
    setSuccess(false);
    setText(`Tem certeza que deseja apagar ${item.username}?`);
  }

  if (!filteredData().length && !delItem) {
    return (
      <View style={s.noDataContainer}>
        <Text style={s.oops}>
          {"Sem dados cadastrados"}
        </Text>

        <Text style={s.noData}>
          {"Clique em \"+\" para adicionar!"}
        </Text>
      </View>
    )
  }

  return (
    <View>
      {filteredData().map((item, i) =>
        <Item
          onDelete={() => handleOpenModal(item)}
          item={item}
          key={i}
        />
      )}

      <WarningModal
        open={!!delItem}
        confirmLabel="Apagar"
        cancelLabel="Cancelar"
        loading={loading}
        success={success}
        error={error}
        text={text}
        onClose={() => setDelItem(false)}
        onConfirm={async () => {
          setLoading(true);
          const res = await Users.delete(delItem.id);

          if (res) {
            setSuccess(true);
            setText("Apagado com sucesso!");
            setDeleted([...deleted, delItem.id]);
          } else {
            setError(true);
            setText("Ocorreu um erro");
          }

          setLoading(false);
        }}
      />
    </View>
  )
}

const s = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignContent: 'center',
    justifyContent: 'center',
  },

  oops: {
    textAlign: 'center',
    color: colors.dark,
    fontSize: 18,
    fontFamily: 'roboto-medium'
  },

  noData: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 16,
    fontFamily: 'roboto-regular',
  },


})

export default List;
