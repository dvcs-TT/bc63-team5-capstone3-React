import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.scss";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className={styles.theme}>
      <div className="text-center wrap-flex-align">
        <div className="col-12">
          <div className={styles.pageContent}>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" />
            <h2>Xin lỗi, chúng tôi không tìm thấy trang mà bạn cần tìm</h2>
            <p>Trở về trang chủ</p>
            <button className="btn btn-danger" onClick={() => navigate("/")}>
              Home
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageNotFound;
