import React, { useEffect, useState, useRef } from 'react';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db, realtimeDatabase } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, set, onValue } from 'firebase/database';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Select from 'react-select';

import { AiFillCopy } from 'react-icons/ai';
const About = () => {
  const [data, setdata] = useState([]);
  const searchRef = useRef();
  const [searchValue, setsearchValue] = useState('');
  const [generateLink, setgenerateLink] = useState(false);
  const [getRefCount, setgetRefCount] = useState();
  const [dropDown, setdropDown] = useState(false);
  const [selectedUser, setselectedUser] = useState({ userName: '', id: '' });
  const [loading, setloading] = useState(false);
  const selectref = useRef();
  const querryData = async () => {
    const arr = [];
    const reference = ref(realtimeDatabase, 'users/');
    onValue(reference, (snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.val();
        const obj = data;
        if (obj.userName !== '' && obj.userName !== undefined) {
          arr.push(obj);
        }
      });
    });

    setdata(arr);

    setloading(true);
  };

  useEffect(() => {
    console.log('useEffect Called');
    setloading(false);
    setInterval(() => {
      querryData();
    }, 1000);
  }, []);
  const handleChange = (e) => {
    console.log('handle change clicked');
    let username = e.value;
    let userid = '';
    data.map((item) => {
      if (item.userName === username) {
        userid = item.userID;
      }
    });
    setselectedUser({ userName: username, id: userid });
  };

  const copyToClipboard = () => {
    console.log('copyToClipboard');
    const text = window.location.port
      ? `http://${
          window.location.hostname + ':' + window.location.port
        }/signup?user=${selectedUser.userName}&ref=${selectedUser.id}`
      : `http://${window.location.hostname}/signup?user=${selectedUser.userName}&ref=${selectedUser.id}`;
    navigator.clipboard.writeText(text);
  };

  return (
    <div name="about" className="w-full my-32 h-[150vh]">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Generate Links for your Referrals
          </h2>
          {generateLink && (
            <a>
              <div
                className="border p-2 bg-gray-400 rounded-xl shadow-xl mt-4 flex items-center justify-center"
                onClick={copyToClipboard}
              >
                {window.location.port
                  ? `http://${
                      window.location.hostname + ':' + window.location.port
                    }/signup?user=${selectedUser.userName}&ref=${
                      selectedUser.id
                    }`
                  : `http://${window.location.hostname}/signup?user=${selectedUser.userName}&ref=${selectedUser.id}`}
                <AiFillCopy
                  className="text-2xl text-white mx-12 cursor-pointer transition-all hover:scale-105"
                  onClick={copyToClipboard}
                />
              </div>
            </a>
          )}
          <div>
            <div className="mt-12">
              <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                <h1 className="text-xl font-bold">Choose a username:</h1>

                <div className="mr-8 ml-4">
                  <div className="relative">
                    <Select
                      options={data.map((item) => {
                        return { value: item.userName, label: item.userName };
                      })}
                      ref={searchRef}
                      onChange={handleChange}
                    />
                    <button
                      className="p-2 mt-12 mb-10"
                      onClick={() => setgenerateLink(true)}
                    >
                      Generate Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default About;
