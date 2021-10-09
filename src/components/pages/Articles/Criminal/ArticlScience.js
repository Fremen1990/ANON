import React from "react";
import "../articles.scss";

// import ArticleSciencePhoto from "../../../../../src/criminal.png";

export default function ArticleCriminal() {
    return (
        <>
            <div className="article-background vh-75">

                <div className="container">
                    <h4 className="article-header text-left fw-bold mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing. </h4>
                    <img
                        src={require("../../../../../src/criminal.png").default}
                        alt="Bruce_Photo"
                        // className="card-img-top img-fluid d-none d-md-block w-25 h-25 p-3 float-left"
                        className="card-img-top img-fluid vw-75"
                    />

                    <p className="text-justify mt-2 lh-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi, debitis hic magnam minus
                        possimus quas quo? Aut culpa doloremque, eligendi, enim et eveniet facilis, ipsa odit quidem
                        quos similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda aut
                        consectetur dolores earum fuga incidunt nulla placeat quasi sapiente?
                    </p>

                    <p className="text-justify mt-2 lh-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dicta doloribus eaque
                        exercitationem explicabo itaque possimus. Ab atque beatae cumque ex impedit incidunt itaque
                        laboriosam necessitatibus neque perferendis, quas qui quia quo quos sunt vitae voluptatem?
                        Adipisci debitis, exercitationem inventore omnis quisquam similique temporibus? Ab amet cumque,
                        delectus ducimus eum expedita perspiciatis! Dicta laboriosam natus nihil nisi veritatis vitae
                        voluptates.
                    </p>

                    <p className="text-justify mt-2 lh-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate expedita harum illum
                        laudantium natus obcaecati! Adipisci aliquam aliquid amet architecto aspernatur aut cum
                        distinctio dolor eaque eligendi eum harum id impedit maiores modi molestiae obcaecati officia
                        perferendis perspiciatis porro possimus praesentium quibusdam quidem, tempora temporibus velit
                        veniam vero voluptas voluptate voluptatibus? Accusamus aliquid praesentium quis quod sed. Ab
                        accusantium animi asperiores aut autem cumque deserunt dolor eius et, expedita facilis hic illo
                        inventore iste iure magnam magni molestias nemo nobis odio odit, pariatur quae qui, quibusdam
                        rem repellat sunt suscipit tenetur totam velit veniam vero voluptas voluptatibus. Commodi
                        debitis rem saepe voluptas? A adipisci culpa cum dolore dolorem doloremque eaque enim eos ipsum
                        itaque laborum maxime molestiae numquam perspiciatis placeat provident quae quia quidem quisquam
                        quos reiciendis rem repellendus sapiente temporibus, unde ut, veniam veritatis voluptate
                        voluptatibus voluptatum? Ab animi commodi consequatur consequuntur ducimus ea laboriosam libero,
                        repellat rerum.
                    </p>


                    <p className="text-justify mt-2 lh-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, vero voluptate. Accusamus
                        aliquam, autem, culpa dolore eius ipsa ipsum iure labore necessitatibus quibusdam, tempora
                        voluptatem? Autem cum et facere facilis fugiat laudantium molestiae mollitia, non, odio officia
                        quibusdam ratione vero?
                    </p>




                    <p className="text-justify mt-2 lh-base">

                    </p>

                    {/*<footer className="article-footer">Edith - the Creator of ANON</footer>*/}

                </div>

            </div>
        </>
    );
}
