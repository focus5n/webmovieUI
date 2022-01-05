function Json() {
  return(
    <div>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
      const data = axios({
        url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=eac2d74bb1e0d22d56ecb6c486158dbc&targetDt=20220101&itemPerPage=8",
        method: "get",
      });
      data.then(function (result) {
        console.log(result.data);
        const boxOfficeResult = result.data.boxOfficeResult;
        const weeklyBoxOfficeList = boxOfficeResult.weeklyBoxOfficeList;
        let html = "";
        weeklyBoxOfficeList.map((v, idx) => {
          html += `<div class="product">
                <div class="imgbox">
                  <img src="./img/sample${idx}.jpg" alt="productMovie" />
                  <div class="details">
                    <h2>${v.movieNm}</h2>
                    <span>${v.openDt}</span>
                    <a href="#">예매하기</a>
                  </div>
                </div>
              </div>`;
        });
        document.querySelector("#productList").innerHTML = html;
      });
    </script>
    </div>
  );
}

export default Json;