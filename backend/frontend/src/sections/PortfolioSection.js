import React from "react";

import AMEA from "../constants/images/amea1.png";
import EJURNAL from "../constants/images/ejurnal1.png";
import LEO from "../constants/images/LEO.png";
import SHEREVEIWS from "../constants/images/sReviews1.png";
import TIKTOK from "../constants/images/tt1.png";
import YAD from "../constants/images/yad1.png";
import YADAPP from "../constants/images/yadApp1.jpg";
import COOKHUB from "../constants/images/CookHub.jpg";
import YERKOKU from "../constants/images/yer1.png";

import PortfolioItem from "../components/PortfolioItem";

function PortfolioSection() {
  return (
    <div id="portfolioSection">
      <h1>Portfolio</h1>

      <div id="porfolioGrid">
        <PortfolioItem
          src={YAD}
          title="Yadvert"
          description="Advertisement platform. I've developed it for an Indian startup and saved 75% of the deadline time. Users can post, view, control adverts. The website is compatible with Facebook posting. "
          viewLink="https://yadvert.in/"
          moreLink="https://www.upwork.com/o/profiles/users/~01d5c3976414600ebf/?p=1389761265806307328"
          commercial
          python
          django
          js
          css
          html
        />
        <PortfolioItem
          src={YADAPP}
          title="YAD App"
          description="Android application for Yadvert. My role was to build a friendly interface to attract more users. REST APIs, Redux, JWT are used to provide a secure connection to the backend server."
          viewLink="https://www.linkedin.com/posts/dmitriy-grechkin_reactnative-javascript-django-activity-6791116059165433856-bBjV"
          commercial
          js
          react
          python
          django
        />
        <PortfolioItem
          src={SHEREVEIWS}
          title="SheReviews"
          description="Brands revieweing platform. Administration can post blogs, events, create notifications for followers. As a full-stack developer, I implemented provided Figma design."
          viewLink="https://shereviews.in"
          moreLink="https://www.upwork.com/o/profiles/users/~01d5c3976414600ebf/?p=1389763429585371136"
          commercial
          python
          django
          js
          css
          html
        />
        <PortfolioItem
          src={AMEA}
          title="AMEA PMI"
          description="Official news website for Azerbaijan Republic Institute of Polymer Materials. I've created locale middleware to handle multi-lingual translation for Azerbaijanian, English, Russian languages."
          viewLink="http://amea-pmi.az"
          moreLink="https://www.upwork.com/o/profiles/users/~01d5c3976414600ebf/?p=1389766270718275584"
          commercial
          python
          django
          js
          css
          html
        />
        <PortfolioItem
          src={YERKOKU}
          title="YerKoku"
          description="Demo version of lifetime stock market. Users can add stocks to the virtual portfolio. It helps to analyze your actual investment rate. Prices are scraped and updated each hour. "
          viewLink="http://yerkoku.az"
          moreLink="https://www.upwork.com/o/profiles/users/~01d5c3976414600ebf/?p=1389770409880158208"
          commercial
          python
          django
          js
          css
          html
        />
        <PortfolioItem
          src={COOKHUB}
          description="Prototype for the Bachelor Diploma work. A recipes app built by Kivy. Helps to explore new dishes, and find missing ingredients based on Virtual Fridge. Helps users to keep track of favourite food."
          title="CookHub"
          viewLink="https://www.youtube.com/watch?v=eDQo-bOqI_g"
          moreLink="https://www.upwork.com/o/profiles/users/~01d5c3976414600ebf/?p=1390029969082109952"
          commercial
          python
        />
        <PortfolioItem
          src={EJURNAL}
          title="EJurnal"
          description="The innovative project was presented to the Education Ministry of Azerbaijan. Online school journals with the automated complex calculation of semester marks along with parents' control system."
          moreLink="https://www.upwork.com/o/profiles/users/~01d5c3976414600ebf/?p=1390036939527086080"
          python
          django
          js
          css
          html
          bootstrap
        />
        <PortfolioItem
          src={TIKTOK}
          title="TikTok Info"
          description="Informative website for TikTok newcomers. Articles about how to start, create content, use TikTok. This project helped me to learn Google Analytics, Google Search, SEO optimization, Google Ads."
          viewLink="http://bogdanbv.pythonanywhere.com"
          moreLink="https://www.upwork.com/o/profiles/users/~01d5c3976414600ebf/?p=1318530480449253376"
          python
          django
          js
          css
          html
          bootstrap
        />
        <PortfolioItem
          src={LEO}
          title="LEO"
          description={
            "Learn English Offline - windows desktop application buily by Tkinter. An interactive tool helping to memorize English words & idioms. It was tested by two groups and proved a list of advantages. Granted a diploma by Tech Fest in Baku."
          }
          viewLink="https://www.youtube.com/watch?v=RbpDNlhTp4w"
          moreLink="https://www.upwork.com/o/profiles/users/~01d5c3976414600ebf/?p=1390039063675359232"
          python
        />
      </div>
    </div>
  );
}

export default PortfolioSection;

// Yadvert, YAD app, shereviews, AMEA, YERKOKU, EJurnal, TikTok, Kivy, TKinter

//</i>
//</i>
