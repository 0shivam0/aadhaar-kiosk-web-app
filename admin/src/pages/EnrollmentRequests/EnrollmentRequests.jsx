import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import {
  deleteUser,
  getUnverifiedUsers,
  updateUser,
} from '../../services/apiservice';
import {useQuery, useMutation} from 'react-query';
import {useNavigate} from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import {sendMessage} from '../../services/apiservice';

import styles from './EnrollmentRequests.module.css';

const EnrollmentRequests = () => {
  const navigate = useNavigate();
  const {data, refetch} = useQuery('unverified', getUnverifiedUsers);
  const deleteUse = useMutation((id) => deleteUser(id), {
    onSuccess: () => {
      refetch();
    },
  });

  const updateUse = useMutation((id) => updateUser(id, {verified: true}), {
    onSuccess: () => {
      refetch();
    },
  });

  const setConfirm = useMutation((payload) => {
    sendMessage(payload);
  });

  return (
    <div className={styles.unverified_users}>
      <Header subheading='Admin' />
      <BackButton onClick={() => navigate('/')} />
      <h1 className={styles.unverified_users__heading}>Enrollment Requests</h1>
      <div className={styles.accordion}>
        {data?.data.length !== 0 ? (
          data?.data.map((item) => (
            <div className={styles.unverified_users__accordion} key={item._id}>
              <Accordion name={item.name} user={item} />
              <Button
                title='Accept'
                color='green'
                onClick={() => updateUse.mutate(item._id)}
              />
              <Button
                title='Reject'
                color='red'
                onClick={() => {
                  deleteUse.mutate(item._id);
                }}
              />
            </div>
          ))
        ) : (
          <div className={styles.unverified_users__nodata}>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default EnrollmentRequests;