import React, { Suspense } from 'react'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import i18n from 'i18next'
import translaionEs from "../locales/es.json"
import translaionFr from "../locales/fr.json"
import translaionEn from "../locales/en.json"
import {initReactI18next, useTranslation} from "react-i18next"


i18n
.use(initReactI18next)
.init({
  resources : {
    es : {translation: translaionEs},
    fr : {translation : translaionFr},
    en : {translation : translaionEn}
  },
  lng: "en",
  fallbackLng : "en",
  interpolation : {escapeValue : false}
})

const About = () => {
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }
  
  const { t } = useTranslation();
  const teamMembers = [
    {
      name: 'Data Analyst and UX Designer',
      designation: t('about.instructor'),
      imageSrc: 'images/jhanayka.jpg',
    },
    
    
   
  ];

  return (
    <Layout home>
      <Head>
        <title>{t('titleAbout')}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
          <h1 className="about-header">{t('about.teamMembers')}</h1>
          <div className="team-members">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex-container">

                <div className="div-container">
                </div>
                <div className="div-container">
                  <h2>{member.name}</h2>
                  <p>{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    </Layout>
    
  );
};

export default About;
