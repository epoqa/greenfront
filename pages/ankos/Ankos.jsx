/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ContentProvider from "../../src/components/ContentProvider/ContentProvider";
import Navigation from "../../src/components/Navigation/Navigation";
import Header from "../../src/components/Header/Header";
import Footer from "../../src/components/Footer/Footer";
import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const mdTheme = createTheme();

import styles from "./Ankos.module.css";
const Ankos = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Navigation />
        <ContentProvider>
          <div className={`${styles.container}`}>
            <div className="px-4 py-5 my-5 text-center">
              <img
                className="d-block mx-auto mb-4"
                src="https://cdn.shopify.com/s/files/1/0588/8793/0056/files/bolo_300x.png?v=1628837134"
                alt=""
                width="172"
                height="157"
              />
              <h1 className="display-5 fw-bold">ანკოს შოპის შესახებ</h1>
              <br />
              <div className="col-lg-10 mx-auto">
                <p>
                  სანამ იქნებოდა ANKOS.SHOP დავიწყეთ Anko{"'"}s Farm - ით. ჩვენ
                  ამაყები ვართ, რომ წარმატებული კომპანია შევქმენით. ანკოსფარმი
                  ეძებს და აგროვებს მთელ მსოფლიოში მიმოფანტულ საუკეთესო კანაფის
                  ჯიშებს, რომლებსაც კერძო ფერმერები და ცნობილი კომპანიები
                  აწარმოებენ. ასევე ANKO'S FARM - ის ერთ-ერთი მიმართულებაა
                  Repackaging ანუ პრემიუმ ხარისხის ორიგინალი "სთრეინების"
                  ლაბორატორიულ და სტერილურ პირობებში გადაფუთვა.
                </p>
                <br />
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/aWG5JQM8ecY"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <br />
                <br />

                <p>
                  კომპანიის დაარსებიდან პირველივე თვეში ჩვენ 500 - ზე მეტი
                  კანაფის თესლი ჩავუშვით გაყიდვაში და აღმოცენების თითქმის 100%
                  შედეგი მივიღეთ. რაც წარმოუდგენლად დიდი შედეგია! ასევე გავედით
                  ექსპორტზე და ჩვენი "სიდები" იგზავნება სომხეთსა და
                  აზერბაიჯანში.
                </p>
                <br />
                <img src="https://cdn.shopify.com/s/files/1/0588/8793/0056/files/Copy_of_Copy_of_made_in_eurasia_480x480.png?v=1628437833" />
                <br />
                <br />

                <p>
                  2021 წლის სექტემბრიდან კი პირველი და ხმაურიანი ნაბიჯებით
                  შემოვაბიჯეთ ონლაინ და მაღაზიების ქსელების გროუინგ ბაზარზე.
                </p>
                <p>
                  {" "}
                  ჩვენი ონლაინ შოპი ყველაზე იაფად, ყველაზე განსხვავებულ, ყველაზე
                  გამოსადეგ და ყველაზე მისაღებ პროდუქციას გთავაზობთ, უმაღლესი
                  დონის საკურიერო და გადახდის ინტეგრირებული სისტემით. ჩვენი
                  ნომერი პირველი ამოცანა პლატფორმის პოტენციურ კლიენტებთან სწორი
                  კომუნიკაცია, უმაღლესი დონის "საპორტი" და არც ერთი უკმაყოფილო
                  მომხმარებელია! რა თქმა უნდა ზოგჯერ შეიძლება მოხდეს უხერხული
                  მდგომარეობა და თქვენი მხრიდან უკმაყოფილება კონკრეტულ საკითხზე,
                  ამ დროს ჩვენი გუნდი სათანადოთაა მოტივირებული გამოვასწოროთ
                  შეცდომა. გარდა იმპორტირებული პროდუქციისა ჩვენ დავიწყეთ
                  ადგილობრივი წარმოება. ANKOS HYDROPONIC SYSTEM უკვე აწარმოებს
                  20 ლიტრიან ჰიდროფონიკებს.
                </p>
                <br />
                <img
                  src="https://cdn.shopify.com/s/files/1/0588/8793/0056/files/WhatsApp_Image_2021-08-20_at_15.53.38_480x480.jpg?v=1629532967"
                  alt=" "
                />
                <br />
                <br />

                <p>
                  რამდენიმე თვეში დაგვემატება ANKOS GROW TENT PRODUCTION და
                  ANKOS LED GROW LIGHT SYSTEM. რაც მოგვცემს საშუალებას
                  საქართველოში ვაწარმოოთ უმაღლესი ხარისხის ტენტები და ლედ
                  განათებები.
                </p>
                <p>#იყიდექართული</p>
                <p>
                  ჩვენი ადგილზე მიტანის სერვისი მუშაობს ყოველდღე დილის 10:00
                  საათიდან საღამოს 21:00 საათამდე. ჩვენი კურიერები შეკვეთას
                  იმავე დღესვე მოგართმევენ! ასევე შეგიძლიათ მობრძანდეთ ჩვენს
                  ვაკის ფილიალში და თქვენი შეკვეთა ადგილიდან გაიტანოთ, თან იქნებ
                  რამე სხვაც მოგეწონოთ და ხელს გააყოლოთ ასე, რომ გელოდებით
                </p>
                <p>ი.აბაშიძის 32 - ში.</p>
                <br />
                <img
                  src="https://cdn.shopify.com/s/files/1/0588/8793/0056/files/WhatsApp_Image_2021-09-14_at_09.31.07_480x480.jpg?v=1631597512"
                  alt=" "
                />
                <br />
                <br />

                <p>
                  ანგარიშსწორება შესაძლებელია, როგორც საბანკო გადმორიცხვით შპს
                  "ანკოსფარმის" თიბისის და საქართველოს ბანკის ანგარიშებზე, TBC
                  და BOG ჩასარიცხი აპარატებით, კრიპტოვალუტით და ადგილზე გადახდა
                  ტერმინალით ან ქეშით. თუ თქვენ რომელიმე სხვა ქალაქში ან სოფელში
                  ცხოვრობთ ჩვენ "სწრაფი გზავნილის" სახით გამოგიგზავნით ამანათს
                  რომელსაც თქვენს სახლთან მყოფი უახლოეს "საქართველოს ფოსტის"
                  ფილიალიდან გაიტანთ. თქვენი კომფორტი ჩვენი მთავარი საზრუნავია!
                  თუ გსურთ კიდევ უფრო მეტი გაიგოთ რატომ უნდა აირჩიოთ ანკოსშოპი,
                  წაიკითხეთ ჩვენი სტატია. დამატებითი ინფორმაციისთვის შეგიძლიათ
                  დაგვირეკოთ 592 15 15 11 ან მოგვწეროთ info@ankos.shop ასევე
                  შეგიძლიათ იხილოთ ჩვენი კანაფის თესლის მწარმოებელი კომპანიის
                  ოფიციალური ვებ-გვერდი https://www.ankosfarm.com
                </p>
              </div>
            </div>
          </div>
          <br />

          <Footer />
        </ContentProvider>
      </Box>
    </ThemeProvider>
  );
};
export default Ankos;
