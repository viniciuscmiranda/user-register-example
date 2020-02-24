import React, { useState, useCallback } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { colors } from '~/constants';

const RefreshView = ({ onRefresh: onRefreshProp, children }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    if (!onRefreshProp) return;

    setRefreshing(true);
    onRefreshProp().then(() => setRefreshing(false));

  }, [refreshing]);


  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor={colors.backgroundSecondary}
          colors={[colors.primary, colors.dark, colors.darker]}
        />
      }
    >
      {children}
    </ScrollView>
  )
}

export default RefreshView;
