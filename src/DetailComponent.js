import React from "react";
import { useParams } from "react-router-dom";
// import "./DetailComponent.css"; // Add your CSS file
import "./App.css"; // Add your main CSS file for styling

const sampleData = [
  {
    title: "Understanding ELSER: A Comprehensive Guide",
    body: "ELSER (Efficiently Learning an Embedding for Search and Retrieval) is a vector search model that helps improve search accuracy by utilizing embeddings. This guide covers its implementation and benefits.",
  },
  {
    title: "Introduction to Vector Search in Elasticsearch",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
  },
  // Add more sample data as needed
];

function DetailComponent() {
  const { id } = useParams();
  const result = sampleData[id];

  if (!result) {
    return <div className="not-found">Item not found</div>;
  }

  return (
    <div className="detail-page">
      <div className="content-wrapper" style={{ marginTop: "80px" }}>
        {" "}
        {/* Added margin-top */}
        <h1 className="detail-title">{result.title}</h1>
        <p className="detail-body">{result.body}</p>
        <a className="back-link" href="/">
          Go Back
        </a>
      </div>
    </div>
  );
}

export default DetailComponent;
