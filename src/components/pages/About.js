import React from "react";
// import "../styles/main.scss";
import sign from "../../assets/ANON _ Edyta LOGO white small sign.png";
import creatorFoto from "../../assets/about/na stronę do About.png";

export default function About() {
  return (
    <>
      <section className="about">
        <article className="about__creator">
          {/* <h1>The Creator of ANON</h1> */}
          {/* <h4>A scientist and teacher from Poland</h4> */}
          <article>
            Trully inspiration to establish ANON was very small and homeless cat
            which was adopted by the Edith. Over time, a friendship which
            developed between her and her cat, made her an animal lover. From
            that time she began to think there must be many other animals who
            need love and help from people. After a few months she adopted next
            homeless cat, but it wasn’t enough to sleep well again. She felt she
            can do more and needs to act to improve the fate of animals on our
            planet. Nowadays, she works hard to achieve it - that is how the
            ANON was created. Of course, she is not alone in this, because love
            and care are contagious. She is supported by the wonderful ANON
            community, divided into 4 sections, dealing with different tasks. If
            you want to know more about ANON, please read the document below:
          </article>
          {/* <h3>
            Edith
            <img className="about__creator__sign" src={sign} alt="ANON" />
          </h3> */}
        </article>
        <section className="about__second_container">
          <aside className="about__fotoContainer">
            <img
              className="about__fotoContainer__creatorFoto"
              src={creatorFoto}
              alt="Edith ANON"
            />
          </aside>

          <article className="about__creator__right">
            <h1>The Creator of ANON</h1>
            <h4>Edith - a molecular biologist and teacher from Poland</h4>
            <article>
              A lot of people doesn’t know or understand that animals are
              similar to us – they are more inteligent, full of emotions and
              fragile than we expected, which show a many of research (i learned
              it form my cat Bruce). That is why we should protect them as we
              protect ourselves. We can do that only by educate the people,
              raising the level of awareness about how much they suffer, because
              we don’t care enough and finally – change the law.
            </article>
            <h3>
              Edith
              <img className="about__creator__sign" src={sign} alt="ANON" />
            </h3>
          </article>
        </section>
      </section>
    </>
  );
}
