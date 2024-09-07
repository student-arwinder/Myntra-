/*import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemSlice";

const Fetchitem = () => {
    const fetchStatus = useSelector((store) => store.fetchStatus);
const dispatch = useDispatch();

useEffect(() => {
    if(fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('http://localhost:8080/items', { signal })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(({ items }) => {
        dispatch(itemsAction.addInitialItems(items));
        console.log("Items fetched", items);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Fetch error:', error);
        }
      });

    return () => {
      controller.abort(); // Corrected: Ensure fetch is aborted on cleanup
    };
  }, [fetchStatus, dispatch]);
    return(
<>
<div>
    Fetch Done :{fetchStatus.fetchDone}
    Currently Fetching : {fetchStatus.currentlyfetching}
</div>
</>
    )
};
export default Fetchitem;*/
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemSlice";

const FetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch(); // Corrected: useDispatch should be called as a function

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('http://localhost:8080/items', { signal })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(({ items }) => {
        dispatch(itemsAction.addInitialItems(items));
        console.log("Items fetched", items);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Fetch error:', error);
        }
      });

    return () => {
      controller.abort(); // Corrected: Ensure fetch is aborted on cleanup
    };
  }, [fetchStatus, dispatch]); // Corrected: Added dispatch to the dependency array

  return (
    <>
      <div>
        Fetch Done: {fetchStatus.fetchDone ? "Yes" : "No"}
        <br />
        Currently Fetching: {fetchStatus.currentlyfetching ? "Yes" : "No"}
      </div>
    </>
  );
};

export default FetchItem;
