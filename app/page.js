export default function Home() {
  const expectedArrivalDate = new Date();
  expectedArrivalDate.setDate(expectedArrivalDate.getDate() + 1);
  expectedArrivalDate.setHours(9, 0, 0, 0);
  const expectedArrivalDateValue = `${expectedArrivalDate.getFullYear()}-${String(expectedArrivalDate.getMonth() + 1).padStart(2, '0')}-${String(expectedArrivalDate.getDate()).padStart(2, '0')}T${String(expectedArrivalDate.getHours()).padStart(2, '0')}:${String(expectedArrivalDate.getMinutes()).padStart(2, '0')}`;

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#">
          <span className="brand-mark">爪</span>
          <span>沐爪宠护洗护店</span>
        </a>
        <nav aria-label="主导航">
          <a href="#services">服务</a>
          <a href="#care">流程</a>
          <a href="#pricing">价格</a>
          <a className="nav-cta" href="#booking">立即预约</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">宠物洗护 · SPA · 造型 · 健康护理</p>
            <h1 id="hero-title">让毛孩子干净、松弛、香喷喷</h1>
            <p>
              沐爪为猫咪和狗狗提供低应激洗护、毛发修剪、耳眼清洁、皮毛养护与上门接送。每只宠物独立建档，护理过程透明可追踪。
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#booking">预约洗护</a>
              <a className="secondary-btn" href="tel:400-088-6618">电话咨询</a>
            </div>
            <div className="quick-facts" aria-label="门店亮点">
              <div className="fact">
                <strong>1v1</strong>
                <span>专属美容师陪护</span>
              </div>
              <div className="fact">
                <strong>30+</strong>
                <span>护理检查项目</span>
              </div>
              <div className="fact">
                <strong>8年</strong>
                <span>门店洗护经验</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="高端宠物洗护店内环境轮播">
            <div className="store-carousel">
              <div className="carousel-track">
                <figure className="carousel-slide">
                  <img src="/images/store-reception-lounge.png" alt="高端宠物洗护店前台接待与等候区" />
                  <figcaption className="carousel-caption">
                    <b>前台接待与等候区</b>
                    <span>温润木作、浅色石材与通透玻璃，营造安静舒适的到店体验。</span>
                  </figcaption>
                </figure>
                <figure className="carousel-slide">
                  <img src="/images/store-bathing-spa.png" alt="高端宠物洗护店透明洗浴护理区" />
                  <figcaption className="carousel-caption">
                    <b>透明洗浴护理区</b>
                    <span>分区洗护、专业浴缸与防滑地面，让护理过程干净可见。</span>
                  </figcaption>
                </figure>
                <figure className="carousel-slide">
                  <img src="/images/store-drying-styling.png" alt="高端宠物洗护店烘干造型区" />
                  <figcaption className="carousel-caption">
                    <b>烘干造型区</b>
                    <span>低噪烘干、独立造型台与整洁工具墙，呈现专业护理质感。</span>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel-dots" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-head">
            <h2>常用服务</h2>
            <p>从基础清洁到赛级造型，按宠物品种、毛量、性格和皮肤状态制定护理方案。</p>
          </div>
          <div className="services">
            <article className="service">
              <div className="service-icon">泡</div>
              <h3>深层洗护</h3>
              <p>温和沐浴、护毛素、吹干拉毛，适合日常清洁和换毛季维护。</p>
            </article>
            <article className="service">
              <div className="service-icon">剪</div>
              <h3>精致造型</h3>
              <p>犬种标准造型、局部修剪、脚底毛和卫生区细节处理。</p>
            </article>
            <article className="service">
              <div className="service-icon">护</div>
              <h3>皮毛养护</h3>
              <p>针对干燥、打结、油脂旺盛和敏感皮肤提供护理建议。</p>
            </article>
            <article className="service">
              <div className="service-icon">车</div>
              <h3>接送到店</h3>
              <p>门店周边 5 公里可预约接送，减少主人往返时间。</p>
            </article>
          </div>
        </section>

        <section className="section care-band" id="care">
          <div className="care-image">
            <img
              src="/images/store-bathing-spa.png"
              alt="高端宠物洗护店透明洗浴护理区"
            />
          </div>
          <div>
            <p className="eyebrow">护理流程</p>
            <h2>每一步都慢一点，宠物会更安心</h2>
            <p>
              我们把洗护拆成清晰流程，先观察状态，再做清洁和护理，最后给主人发送护理反馈。
            </p>
            <div className="steps">
              <div className="step">
                <span className="step-num">1</span>
                <div>
                  <strong>到店评估</strong>
                  <span>记录体重、毛发打结、皮肤状态和宠物情绪。</span>
                </div>
              </div>
              <div className="step">
                <span className="step-num">2</span>
                <div>
                  <strong>分区护理</strong>
                  <span>洗澡、耳眼清洁、剪甲、脚底毛和毛发养护同步完成。</span>
                </div>
              </div>
              <div className="step">
                <span className="step-num">3</span>
                <div>
                  <strong>复查交付</strong>
                  <span>拍照反馈护理结果，并提醒下次洗护建议时间。</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-head">
            <h2>洗护套餐</h2>
            <p>价格会根据体型、毛量、打结程度微调，预约后美容师会先确认方案。</p>
          </div>
          <div className="pricing">
            <article className="price-card">
              <h3>猫咪舒缓洗护</h3>
              <div className="price">¥128<span>起</span></div>
              <ul>
                <li>低噪吹干</li>
                <li>耳眼清洁</li>
                <li>基础梳毛</li>
              </ul>
            </article>
            <article className="price-card featured">
              <h3>狗狗精洗护理</h3>
              <div className="price">¥98<span>起</span></div>
              <ul>
                <li>深层沐浴</li>
                <li>剪甲磨甲</li>
                <li>脚底毛修剪</li>
              </ul>
            </article>
            <article className="price-card">
              <h3>全身造型套餐</h3>
              <div className="price">¥198<span>起</span></div>
              <ul>
                <li>全身修剪</li>
                <li>造型沟通</li>
                <li>护理照片反馈</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section booking" id="booking">
          <div>
            <p className="eyebrow">预约到店</p>
            <h2>告诉我们宠物的状态，剩下的交给沐爪</h2>
            <p>
              营业时间 10:00-21:00。工作日建议提前 1 天预约，周末建议提前 2-3 天预约。
            </p>
            <div className="contact-list">
              <div className="contact-item">
                <span>☎</span>
                <div><b>400-088-6618</b>电话预约与护理咨询</div>
              </div>
              <div className="contact-item">
                <span>⌂</span>
                <div><b>上海市静安区森宠路 88 号</b>近地铁 2 号线，门口可临停</div>
              </div>
              <div className="contact-item">
                <span>◎</span>
                <div><b>透明洗护区</b>主人可在休息区实时查看护理进度</div>
              </div>
            </div>
          </div>

          <form>
            <div className="form-grid">
              <label>
                主人姓名
                <input type="text" placeholder="例如：林小姐" />
              </label>
              <label>
                联系电话
                <input type="tel" placeholder="请输入手机号" />
              </label>
            </div>
            <div className="form-grid">
              <label>
                宠物类型
                <select>
                  <option>狗狗</option>
                  <option>猫咪</option>
                  <option>其他小宠</option>
                </select>
              </label>
              <label>
                预约服务
                <select>
                  <option>深层洗护</option>
                  <option>精致造型</option>
                  <option>皮毛养护</option>
                  <option>接送到店</option>
                </select>
              </label>
            </div>
            <div className="form-grid">
              <label>
                宠物数量
                <input type="number" min="1" max="20" defaultValue="1" />
              </label>
              <label>
                期望时间
                <input type="datetime-local" defaultValue={expectedArrivalDateValue} />
              </label>
            </div>
            <label>
              宠物情况
              <textarea placeholder="例如：泰迪 5kg，轻微打结，比较怕吹风"></textarea>
            </label>
            <button className="primary-btn submit" type="button">提交预约信息</button>
          </form>
        </section>
      </main>

      <footer>
        <a className="brand" href="#">
          <span className="brand-mark">爪</span>
          <span>沐爪宠护洗护店</span>
        </a>
        <span>© 2026 MuPaw Pet Care. 专注温和洗护与宠物健康护理。</span>
      </footer>
    </>
  );
}
