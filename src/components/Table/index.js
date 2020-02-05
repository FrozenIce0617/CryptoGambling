import React, { useEffect, useState } from 'react';
import { Subscription } from 'react-apollo';
import { gql } from 'apollo-boost';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import './styles.css';

const BETS_ADDED_SUBSCRIPTION = gql`
  subscription betAdded {
    betAdded {
      time
      bet
      payout
      profit
    }
  }
`;

function useWindowSize() {
  const isClient = typeof window === 'object';

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

const Table = () => {
  const size = useWindowSize();
  const data = [];

  return (
    <Subscription subscription={BETS_ADDED_SUBSCRIPTION} shouldResubscribe>
      {({ data: bets, loading, error }) => {
        if (loading) return <span style={{ color: 'white' }}>Loading...</span>;
        if (
          error ||
          bets === undefined ||
          bets.betAdded === null ||
          bets.betAdded.length === 0
        )
          return <span style={{ color: 'white' }}>Error</span>;

        if (data.length >= 10) data.shift();
        data.push({
          ...bets.betAdded,
          time: new Date(bets.betAdded.time).toLocaleString(),
          bet: bets.betAdded.bet / 1000,
          multiplier: bets.betAdded.payout / 4,
          profit: bets.betAdded.profit / 1000,
        });

        return (
          <BootstrapTable data={data}>
            <TableHeaderColumn
              dataField="time"
              isKey
              thStyle={{ whiteSpace: 'nowrap' }}
            >
              TIME
            </TableHeaderColumn>
            {size.width > 1192 && (
              <TableHeaderColumn
                dataField="bet"
                thStyle={{ whiteSpace: 'nowrap' }}
              >
                BET
              </TableHeaderColumn>
            )}
            {size.width > 1192 && (
              <TableHeaderColumn
                dataField="multiplier"
                thStyle={{ whiteSpace: 'nowrap' }}
              >
                MULTIPLIER
              </TableHeaderColumn>
            )}
            <TableHeaderColumn
              dataField="profit"
              thStyle={{ whiteSpace: 'nowrap' }}
            >
              PROFIT
            </TableHeaderColumn>
          </BootstrapTable>
        );
      }}
    </Subscription>
  );
};

export default Table;
