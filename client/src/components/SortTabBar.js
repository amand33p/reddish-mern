import React from 'react';
import { ReactComponent as Best } from '../svg/best.svg';
import { ReactComponent as Hot } from '../svg/hot.svg';
import { ReactComponent as New } from '../svg/new.svg';
import { ReactComponent as Top } from '../svg/top.svg';
import { ReactComponent as Controversial } from '../svg/controversial.svg';

import { Paper, Tabs, Tab, SvgIcon } from '@material-ui/core';
import { useSortTabStyles } from '../styles/muiStyles';

const SortTabBar = ({ sortBy, handleSortChange }) => {
  const classes = useSortTabStyles();

  return (
    <Paper variant="outlined" className={classes.mainPaper}>
      <Tabs
        value={sortBy}
        onChange={handleSortChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
      >
        <Tab
          icon={
            <SvgIcon fontSize="small">
              <Hot />
            </SvgIcon>
          }
          label="Hot"
          value="hot"
        />
        <Tab
          icon={
            <SvgIcon fontSize="small">
              <Best />
            </SvgIcon>
          }
          label="Best"
          value="best"
        />
        <Tab
          icon={
            <SvgIcon fontSize="small">
              <New />
            </SvgIcon>
          }
          label="New"
          value="new"
        />
        <Tab
          icon={
            <SvgIcon fontSize="small">
              <Top />
            </SvgIcon>
          }
          label="Top"
          value="top"
        />
        <Tab
          icon={
            <SvgIcon fontSize="small">
              <Controversial />
            </SvgIcon>
          }
          label="Controversial"
          value="controversial"
        />
      </Tabs>
    </Paper>
  );
};

export default SortTabBar;