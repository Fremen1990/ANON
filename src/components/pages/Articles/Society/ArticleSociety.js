import React from "react";
import "../articles.scss";

import ArticlePhoto_Lemon from "../../../../assets/about/team/Devthomas - deskotop.png";

export default function ArticleSociety() {
    return (
        <>
            <div className="article-background">

                <div className="container">
                    <h4 className="article-header text-left fw-bold mt-3">
                        The history of the founding of ANON
                    </h4>
                    <img
                        src={ArticlePhoto_Lemon}
                       // src="images/society.png"
                        alt="Bruce_Photo"
                        // className="card-img-top img-fluid d-none d-md-block w-25 h-25 p-3 float-left"
                        className="
                        "                    />

                    <p className="text-justify mt-2 lh-base">
                        You know that ANON's area of interest is the animal kingdom
                        but our website does not explain what was the source of
                        inspiration for our creator. We asked her to reveal the
                        secret.
                    </p>

                    <p className="text-justify mt-2 lh-base">
                        Edith (Edyta) is an animal lover, although, for most of her
                        life our TCoA could not fill the "hole in her heart" after
                        losing a four-legged friend in her childhood. In the end,
                        however, she found it in her heart to adopt two cute kittens!
                        Bruce'n'Lemon (in this exact order).
                    </p>


                    <p className="text-justify mt-2 lh-base">
                        Bruce lived on the street. On the day of adoption he was a
                        three-month-old male kitten with a very interesting color and
                        a characteristic spot on the front paw. Neglected, he required
                        immediate veterinary care. He suffered from cat flu, scabies
                        and fleas. However, he fully recovered very quickly and today
                        he is a happy, very cuddly individual.
                    </p>

                    <p className="text-justify mt-2 lh-base">
                        Lemon went to Edith
                        (Edyta) as a five-week-old baby kitten. He was given by a
                        family that was not prepared for his presence. At first he was
                        very wild and scared. It took him a long time to get used to
                        his new place and his older brother. In the end he did and
                        today he does not part with Edith (Edyta) and Bruce. Besides,
                        he is extremely lively! He loves to eat flowers, climb up his
                        mum and look for snacks hidden in various corners of their
                        house. Were Bruce'n'Lemon the source of inspiration for
                        founding ANON? Yes Yes Yes! Living with animals allows us
                        understand that they are actually very similar to us.
                        Especially those that are closely related to us - e.g.
                        chimpanzees, but not only. This is confirmed by current
                        scientific reports and it is worth spreading this knowledge
                        among those who do not believe it.
                    </p>


                    <p className="text-justify mt-2 lh-base">
                        The magazine Current Biology has published results of a study
                        conducted at Oregon State University. It concerned the
                        relationship between an owner and a cat. 70 kittens up to 20
                        weeks of age and 38 adult cats aged 1 to 13.5 years took part
                        in it. Some of the animals were assigned to the control group
                        and some to the research group. The task was to make the cats
                        stay in a place not familiar for them with a human companion
                        that they know and then without him (for 2 minutes). It was
                        observed that over 65% of the cats expressed affection. Some
                        of them were meowing and did not want to explore the room
                        clearly waiting for their guardian's return. The conclusion
                        was that cats become affected to us just like children to
                        their parents.
                    </p>

                    <p className="text-justify mt-2 lh-base mb-4">
                        This is not surprising. Anyone who spends their time to
                        observe their cat knows that he has his own unique
                        temperament, character and that he experiences different
                        emotions depending on a situation. We will tell you about the
                        nature of cats another time. Share the amazing stories of your
                        pets by sending us photos and notes about them so we can
                        describe them. Every pet deserves a moment of attention! :)
                    </p>

                    {/*<footer className="article-footer">Edith - the Creator of ANON</footer>*/}

                </div>

            </div>
        </>
    );
}
