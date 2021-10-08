import React from "react";
import "../articles.scss";

// import ArticlePhoto1 from "../../../../assets/articles/Science - article1.PNG";
// import ArticlePhoto2 from "../../../../assets/articles/Science - article1-2.PNG";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Article() {
  return (
    <>
      <div className="article-background">
        {/* <h2>Science</h2> */}

        {/* <div className="d-grid m-auto h-100"> */}
        <div className="container">
          <div className="row ">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center text-dark p-4">
                  The application of deer antler stem cells in medicine and
                  cosmetology.
                </h2>
                <h4>Introduction</h4>
                <p className="card-text text-justify">
                  The valuable properties of deer antlers have been known and
                  used in alternative medicine for a long time (in Chinese
                  medicine, the territory of New Zealand and South America). The
                  powdered deer antlers were and are primarily used to
                  accelerate the healing of wounds and fractures, strengthen the
                  body and in the fight against diseases such as osteoporosis,
                  iron deficiency (anaemia), arterial-hypertension or AD, known
                  as atopic dermatitis. The ordinary "stagers" also use them to
                  make tinctures for which recipes can be easily found on the
                  Internet.
                </p>

                <h4>Description</h4>
                <p className="card-text text-justify">
                  For several years, research on the properties and
                  possibilities of using deer antlers has also been carried out
                  in the field of convection medicine. The history of these
                  studies begins in Poland, specifically at Wroclaw Medical
                  University. In 2003, employees of this institution visited The
                  Wroclaw Zoological Garden because a fawn damaged his antlers,
                  which were still growing (Cervus elaphus / the red deer). The
                  effect of this intervention, apart from helping the animal,
                  was the removal of tissue fragments from the damaged antlers.
                  {/*<img*/}
                  {/*  src={ArticlePhoto1}*/}
                  {/*  alt="Deer photo"*/}
                  {/*  className="card-img-top img-fluid d-none d-md-block w-75 h-75 float-left pr-4 pt-4 pb-4"*/}
                  {/*/>*/}
                  The activity of Stem Cells Spin S.A. (JSC) mainly relies on
                  the breeding of MIC-1 and its derivative substances, as well
                  as the development and sale of products derived from them.{" "}
                  <br />
                  <small>MIC-1 in medicine and cosmetology</small>
                  <br />
                  Stem Cells Spin S.A (JSC) develops products intended for sale
                  within various research projects. These projects concern the
                  creation of substances and preparations used in medicine for
                  the regeneration of tendons, cartilage, bones, muscles and
                  nervous tissue, cornea, wound healing or preparations for hair
                  / eyelash growth. Apart from that, they also implement
                  projects aimed at the development of cosmetology. It is mainly
                  about dermocosmetics. For this purpose, Stem Cells Spin S.A
                  has created the Revitacell brand.
                </p>

                <h4>Revitacell</h4>
                <p className="card-text text-justify">
                  <strong>Revitacell</strong> has in its offer sets and
                  cosmetics intended for face or eye care. Those are mainly
                  various types of creams, serums or concentrates based on MIC-1
                  stem cells and derivatives. Manufacturers report that the most
                  important goal of their cosmetics is to mitigate the effects
                  of tissue aging by supporting its regeneration processes after
                  damage caused by biological or external (e.g. environmental
                  conditions) factors. The prices of these cosmetics are
                  classified as above average which results from the expensive
                  technological process leading to their production. The sets
                  range from 200 to 300 PLN, creams from 100 to 200 PLN and eye
                  and hair concentrates (e.g. eyelashes) from 70 up to 190PLN.
                  Researchers from the University of Wroclaw isolated the stem
                  cells from the collected tissue and began to multiply them.
                  Soon after, it got to the groundbreaking discovery! The stem
                  cells, obtained from red deer antlers, were named Mic-1 (after
                  the names of the researchers and the only woman in the team)
                  and the results of research have been published, indicating
                  their amazing potential. In one of the articles on this
                  subject, we read that Mic-1 multiplies very intensively (the
                  growth of antlers is 1-2 cm per day, which indicates an
                  increased rate of cell division). For this reason, they show
                  great regenerative abilities enabling effective tissue
                  renewal. Due to the fact that MIC-1 are of animal origin, they
                  also have many similarities to the cells produced by the bone
                  marrow of other animals and humans. The application of MIC-1
                  in the treatment of diseases and cosmetology is therefore
                  safe, because these cells do not trigger an immune response
                  (e.g. they do not cause an allergic reaction). The research
                  team from the University of Wroclaw also conducted tests aimed
                  at confirming the efficiency of MIC-1 in the treatment of
                  diseases. For example, they conducted in vitro studies on
                  keratinocytes and fibroblasts. The studies have shown that
                  MIC-1 stimulate their renewal, which improves the elasticity
                  of connective tissue and skin. This discovery led to the start
                  of work on production of dermocosmetics based on MIC-1.
                  <br />
                  Stem Cells Spin Ltd in Wroclaw
                  <br />
                  Due to the difficulties in obtaining funds for further
                  activity, in 2009 the team of discoverers established the
                  company Stem Cells Spin sp. zoo (Ltd), initially with a small
                  share capital in the amount of 50,000PLN. Over time, the
                  company became Stem Cells Spin S.A (JSC) and its share capital
                  increased to 1,293,650PLN in 2014.
                </p>
                <h4>Conclusion - Ethical aspects</h4>
                <p className="card-text text-justify">
                  Due to the fact that dermocosmetics ,offered by Revitacell ,
                  are of animal origin, not everyone will be interested in them(
                  mainly people declaring themselves as vegans or activists,
                  fighting against cosmetics testing on animals). ANON, as the
                  international organization, is not critical of the
                  establishment and development of Stem Cells S.A.{" "}
                  {/*<img*/}
                  {/*  src={ArticlePhoto2}*/}
                  {/*  alt="White mouses photo"*/}
                  {/*  className="card-img-top img-fluid d-none d-md-block float-right w-50 h-50 p-4"*/}
                  {/*/>*/}
                  ( the founder of ANON is a molecular biologist, what allows
                  her for evaluation). However, we are concerned about the fact
                  that MIC-1 are obtained from red deer antlers and we do not
                  know where these antlers come from (rather they are not
                  collected in forest), under what conditions the animals live
                  and if the procedure for collecting antler fragments is safe
                  and painless? We have no information on what it looks like.
                  There is also the issue of testing the Revitacell products on
                  animals. We know, after consulting with the founder of ANON,
                  that in the case of many substances, drugs or cosmetics, there
                  is no non –invasive, available way of testing them other than
                  on animals. And that is the case with Revitacell
                  dermocosmetics.{" "}
                  <strong>
                    It is important to find out how such tests run. Do the
                    participating animals stay in an intact health or perhaps
                    suffer because of the foreseen or not side effects.
                  </strong>{" "}
                  We will let you know when we get the relevant information!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
