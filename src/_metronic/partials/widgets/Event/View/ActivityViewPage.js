import { Box } from '@mui/material';
import React from 'react';
import { Route } from 'react-router-dom';
import ActivityCoverCard from './ActivityCoverCard';
import ActivityViewListCard from './ActivityViewListCard';
export default function ActivityViewPage() {
  return (
    <Box
      className="scroll scroll-1  "
      id='scroller'
      style={{
        height: '100vh',
        backgroundColor: "#F0F0F0",
        width: '100%',
        paddingLeft: '10%',
        paddingRight: '10%'
      }}
    >
      <div style={{backgroundColor:'white'}}>
        <Route path={`/Event/View/ActivityCover/:id`}>
          <ActivityCoverCard />
        </Route>
        <Route path={`/Event/View/ActivityList/:id`}>
          <ActivityViewListCard />
        </Route>
      </div>
    </Box>
  )
}