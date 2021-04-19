import React from "react";
import "../../App.css";
import sign from "../../assets/ANON _ Edyta LOGO white small sign.png";
import creatorFoto from "../../assets/about-foto.jpg";

export default function About() {
  return (
    <>
      <section className="about">
        <aside className="about__fotoContainer">
          <img
            className="about__fotoContainer__creatorFoto"
            src={creatorFoto}
            alt="Edith ANON"
          />
        </aside>

        <article className="about__creator">
          <h1>The Creator of ANON</h1>
          <h4>A scientist and teacher from Poland</h4>
          <article>
            A lot of people doesn’t know or understand that animals are similar
            to us – they are more inteligent, full of emotions and fragile than
            we expected, which show a many of research. That is why we should
            protect them as we protect ourselves. We can do that only by educate
            the people, raising the level of awareness about how much they
            suffer, because we don’t care enough and finally – change the law.
          </article>
          <h3>
            Edith
            <img className="about__creator__sign" src={sign} alt="ANON" />
          </h3>
        </article>
      </section>
    </>
  );
}
