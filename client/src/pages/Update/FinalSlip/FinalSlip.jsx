import React from 'react'
import Header from '../../../components/Header/Header'
import CardScanner from '../../../components/Card/CardScanner'
import styles from './FinalSlip.module.css'
import { Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { useNavigate } from 'react-router-dom'
import AudioAutoplay from '../../../components/AudioAutoplay/AudioAutoplay'

const FinalSlip = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <>
      <Header subheading={t('UPDATE')} />
      <AudioAutoplay
        audio={`${process.env.PUBLIC_URL}/assets/audios/update-message-notification`}
      />
      <div className={styles.card__container}>
        <CardScanner
          image={`${process.env.PUBLIC_URL}/assets/images/slip.svg`}
        />
      </div>
      <div>
        <Grid container justifyContent="center">
          <Typography align="center" fontWeight={'Bold'}>
            {t('THANK_YOU_FOR_YOUR_TIME')}
            <br />
            {t('ENSURE_THAT_RECIEVED_A_CONFIRMATION_MESSAGE')}
          </Typography>
        </Grid>
      </div>
      <SubmitButton onClick={() => navigate('/')} />
    </>
  )
}

export default FinalSlip
