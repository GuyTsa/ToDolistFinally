import React, { useState, useEffect } from "react";
import UpBorder from "./UpBorder";
import ToDoListLine from "./ToDoListLine";

import { makeStyles } from "@material-ui/core/styles";
import { useMemo } from "react";


const useStyles = makeStyles({
  list_position: {
    marginLeft: 30,
  },
});

const BorderParents = () => {
  const [mylist, setMylist] = useState([]);
  const [token, setToken] = useState(0);
  const classes = useStyles();

const addToList = (addedProduct) => {

  const TaskData ={
    token:token,
    task:addedProduct,
    date:new Date(),
    ischecked:false
 }
 
  setMylist([
    ...mylist,TaskData
  ]);
}

const changeCheckTask = (taskToken) => {
  const updatedList = mylist.map(task => task.token === taskToken ? {...task, ischecked: !task.ischecked} : task);
 
  setMylist(updatedList);
}

useEffect(() => {mylist.length > 0 && setToken(token + 1)}, [mylist]);

const sortedList = useMemo(() => mylist.sort((a, b) =>b.date -a.date), [mylist])

  return (
    <div>
      <UpBorder
        PassProductToParent={(BorderProduct) => {
          addToList(BorderProduct);
        }}
      />

      <div className={classes.list_position}>
        
        {mylist.map((Task) =>
        <ToDoListLine key={Task.token} data={Task} ChangeCheckBox={() => changeCheckTask(Task.token)}  />
        )}
       
        </div>
    </div>
  );
};

export default BorderParents;
