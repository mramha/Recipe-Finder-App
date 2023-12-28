import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

const apiKey = "359e1269691c4c79904b676d9c8fc5ba";
const RecipeDetails = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const params = useParams();

  const fetchDetails = async () => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`
    );
    const data = await resp.json();
    setDetails(data);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4">{details.title}</h2>
            <img
              className="img-fluid"
              src={details.image}
              alt={details.title}
            />
          </div>
          <div className="col-md-6">
            <div className="btn-group mb-4">
              <button
                className={`btn ${
                  activeTab === "ingredients" ? "btn-danger" : "btn-light"
                }`}
                onClick={() => setActiveTab("ingredients")}
              >
                Ingredients
              </button>
              <button
                className={`btn ${
                  activeTab === "instructions" ? "btn-danger" : "btn-light"
                }`}
                onClick={() => setActiveTab("instructions")}
              >
                Instructions
              </button>
            </div>
            {activeTab === "ingredients" && (
              <ul className="list-group">
                {details.extendedIngredients.map(({ id, original }) => (
                  <li key={id} className="list-group-item">
                    {original}
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "instructions" && (
              <div>
                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                <p
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
