import React, { useState } from "react";
import axios from "axios";

const PatientSymptomForm = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    symptoms: "",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const res = await axios.post("http://localhost:5000/api/diagnosis/analyze", formData);
      setResult(res.data.result);
    } catch (err) {
      alert("AI analysis failed.");
      // toStringast.error("AI analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">AI Symptom Checker</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md bg-white p-4 rounded-xl shadow">
        <input
          type="text"
          name="patientName"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="symptoms"
          placeholder="Describe your symptoms..."
          rows="4"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Analyzing..." : "Get Diagnosis"}
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded">
          <h3 className="font-semibold mb-2">AI Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default PatientSymptomForm;
