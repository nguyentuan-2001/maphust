import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="div__search">
        <input type="text" placeholder="Tìm kiếm..." id="search-input" />
        <div className="search"></div>
      </div>
      <ul id="suggestions-list"></ul>

      <div id='message'>
        <p>
          Bạn đang ở ngoài map!!
        </p>
        <button id='ok'>Ok</button>
      </div>
      <div id='if-length'>
        <p id='length_street'></p>
        <p id='time_street'></p>
        <button id='ok_length'>Ok</button>
      </div>

      <div className="left-panel" id='left-panel'>
        <div className="radio-buttons">
          <label className="radio-label">
            <input
              type="radio"
              name="click"
              id='nearby'
            />
            <span>
              <img
                id="image0"
                src="https://platinumaps.blob.core.windows.net/static/icon/zoom_button.png"
                alt="..."
              />
              <p>Search nearby</p>
            </span>
          </label>

          <label className="radio-label">
            <input
              type="radio"
              name="click"
              value="library"
              //onChange={(e) => changeImage(e.target)}
              id="library"
            />
            <span>
              <img
                id="image1"
                src="https://platinumaps.blob.core.windows.net/maps/267/category/7625_highlight.png?v=638064414426586250"
                alt="..."
              />
              <p>Thư viện</p>
            </span>
          </label>

          <label className="radio-label">
            <input
              type="radio"
              name="click"
              value="classroom"
              //onChange={(e) => changeImage(e.target)}
              id="classroom"
            />
            <span>
              <img
                id="image2"
                src="https://platinumaps.blob.core.windows.net/static/icon/category/restaurant.png?v=638064414342265251"
                alt="..."
              />
              <p>Phòng học</p>
            </span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="click"
              value="hall"
              //onChange={(e) => changeImage(e.target)}
              id="hall"
            />
            <span>
              <img
                id="image3"
                src="https://platinumaps.blob.core.windows.net/static/icon/category/shopping.png?v=638064414254106175"
                alt=""
              />
              <p>Hội trường</p>
            </span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="click"
              value="all"
              //onChange={(e) => changeImage(e.target)}
              id="all"
            />
            <span>
              <img
                id="image4"
                src="https://platinumaps.blob.core.windows.net/maps/267/category/7801.png?v=637808459331964325"
                alt=""
              />
              <p>All</p>
            </span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              id="list"
              name="click"
            />
            <span>
              <img
                id="image3"
                src="https://www.svgrepo.com/show/8335/list.svg"
                alt=""
              />
              <p>List</p>
            </span>
          </label>
        </div>
      </div>

      <div className='list-left'>
        <div className="cards">
          <div className="close-left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Logo_Hust.png/1200px-Logo_Hust.png" alt="" />
            <span>Đại Học Bách Khoa Hà Nội</span>
            <i id="closeLeft">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </i>
          </div>
          
          <div className="card-body">
            
            <div id="input-tim">
              <div id='list-tim'>
                <div>
                  <select className="form-control form-control" id="start-street">
                    <option value="" disabled>
                      Chọn điểm bắt đầu
                    </option>
                  </select>

                  <select className="form-control input-solid" id="end-street">
                    <option value="" disabled>
                      Chọn điểm cần đến
                    </option>
                  </select>
                </div>

                <div>
                  <button className="btn btn-primary" id="search-street">Tìm đường</button><br />
                  <button className='btn btn-primary' id='search-address'>Tìm điểm</button>
                </div>
              </div>
            </div>

            <div className='input_search'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            
              <input type="text"  placeholder='Search' id='search_left'/>
            </div>

            <div className="call" id='calls'>               
              <div className="radio-buttons">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="click"
                    value="atraction"
                    //onChange={(e) => changeImage(e.target)}
                    id="library_item"
                  />
                  <span>
                    <img
                      id="image1"
                      src="https://platinumaps.blob.core.windows.net/maps/267/category/7625_highlight.png?v=638064414426586250"
                      alt="..."
                    />
                    <p>Thư viện</p>
                  </span>
                </label>

                <label className="radio-label">
                  <input
                    type="radio"
                    name="click"
                    value="restaurant"
                    //onChange={(e) => changeImage(e.target)}
                    id="classroom_item"
                  />
                  <span>
                    <img
                      id="image2"
                      src="https://platinumaps.blob.core.windows.net/static/icon/category/restaurant.png?v=638064414342265251"
                      alt="..."
                    />
                    <p>Phòng học</p>
                  </span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="click"
                    value="shopping"
                    //onChange={(e) => changeImage(e.target)}
                    id="hall_item"
                  />
                  <span>
                    <img
                      id="image3"
                      src="https://platinumaps.blob.core.windows.net/static/icon/category/shopping.png?v=638064414254106175"
                      alt=""
                    />
                    <p>Hội trường</p>
                  </span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="click"
                    value=""
                    //onChange={(e) => changeImage(e.target)}
                    id="all_item"
                  />
                  <span>
                    <img
                      id="image4"
                      src="https://platinumaps.blob.core.windows.net/maps/267/category/7801.png?v=637808459331964325"
                      alt=""
                    />
                    <p>All</p>
                  </span>
                </label>
              </div>
            </div>

            <ul id='listAddress'></ul>
          </div>
        </div>
      </div>

      <div id="map" style={{ width: '100%', height: '100vh' }} />

      <div className="right-panel">
        <div className="card_right">
          <div className="close">
            <div className='input_right'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            
              <input type="text"  placeholder='Search' id='search_right'/>
            </div>

            <i id="closeRight">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </i>

          </div>
          <img src="" className="card-img-top" alt="..." height="300px" id="img-address"/>
          <div className="card-body">
            <h5 className="card-title" id="listul"></h5>
            <div id='navigate'>
              <img src="https://www.gstatic.com/images/icons/material/system/1x/directions_white_18dp.png" alt="" />
              <p>Đường đi</p>
            </div>
            <div className="accordion" id="accordionex"></div>
            <div className="if_school">
              Đại học bách khoa
              <br />              
              <a href="https://maphust.vercel.app/">https://maphust.vercel.app/</a> <br />
              0123456789
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar