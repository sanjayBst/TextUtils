import React, {useState} from "react";

export default function About(props) {

  let myStyle = {
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode ==='dark'?'rgb(36 74 104)':'white'
  }
    
  return (
    <div classNameName="container" >
      <h1 className = "my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>About us </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion 1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos aliquid maxime quis molestias repudiandae ipsam hic. Magni aliquam distinctio nihil numquam quo voluptas labore sint corrupti neque, blanditiis laborum libero eaque iste, magnam cum debitis perspiciatis doloremque natus laboriosam quibusdam fugit minima? Autem beatae qui fuga. Aliquid recusandae repellat iusto, numquam unde consectetur dolorum quae beatae laborum, nostrum quas placeat dolor accusantium cumque, aperiam earum. Eos vel, cupiditate nihil sed quam quod repudiandae? Incidunt nostrum magnam deserunt earum veritatis ratione voluptatum ex debitis ullam possimus. Laboriosam amet itaque qui nesciunt atque saepe deleniti dolore vel, provident consectetur expedita cumque! Enim.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion 2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem earum quod porro odio consequuntur maxime deleniti, ad quia a ratione animi nemo commodi consectetur voluptate totam sapiente aut quaerat doloribus natus exercitationem? Dolorem, vitae. Et sunt architecto ex minus distinctio sequi modi eligendi molestias velit iusto quibusdam repellendus minima reiciendis cupiditate, temporibus est dicta adipisci nam praesentium voluptate quisquam facilis perspiciatis qui? Dolor suscipit itaque exercitationem et, a, error repellat incidunt nisi sequi repellendus ullam vel ex corporis quibusdam qui laborum? In dignissimos cupiditate, voluptatum iusto non dolorum sed tempora sint consectetur ipsum iste exercitationem fugit hic odit repellat!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion 3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, ab. Aspernatur eius ex rerum culpa doloremque necessitatibus temporibus labore, reiciendis repellendus officiis accusamus saepe sit! Fuga assumenda, nesciunt aspernatur voluptatum officiis et harum odio hic esse cupiditate? Facere quidem sequi deserunt, inventore exercitationem distinctio eum commodi! Cum assumenda, atque vero, doloribus animi impedit quae nulla voluptatum in nisi aliquam est explicabo cupiditate ipsum beatae nam? Animi mollitia veniam suscipit nam voluptates incidunt explicabo distinctio atque voluptatem nobis enim fuga architecto, ab, dolore doloribus commodi odio beatae! Eveniet, at veniam laudantium suscipit dolore, quos assumenda hic soluta quia consequatur ipsam perferendis!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
