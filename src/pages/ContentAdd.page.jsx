import React, { useEffect, useState } from "react";
import { getContactData } from "../service/contact.service";
import { data } from "autoprefixer";

const ContentAddPage = () => {
  const [item, setItem] = useState({
    loading: false,
    data: null,
    error: null,
  });
  useEffect(() => {
    (async () => {
      setItem((pre) => ({ ...pre, loading: true }));
      const res = await getContactData();
      if (res.error) {
        setItem((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItem((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, []);
  return <div>ContentAddPage</div>;
};

export default ContentAddPage;
