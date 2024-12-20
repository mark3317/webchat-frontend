export const indexTemplate = () => /*html*/ `
<aside class="navigation">
      <nav>
        <ul>
          <li><a href="/">█𝑨𝑼𝑻𝑯𝑶𝑹𝑰𝒁𝑨𝑻𝑰𝑶𝑵</a></li>
          <li><a href="./register.html">█𝑹𝑬𝑮𝑰𝑺𝑻𝑹𝑨𝑻𝑰𝑶𝑵</a></li>
          <li><a href="./mainchat.html">█𝑴𝑨𝑰𝑵 𝑪𝑯𝑨𝑻</a></li> 
        </ul>
      </nav>
    </aside>
    <main>
      <!--* BACKGROUND -->
      <div id="particles-js">
      </div>
      <!-- todoLOGO -->
      <div id="logo" style="min-height:6rem">
        <h1>Веб Чат Онлайн</h1>
      <!--! spinner -->
      <div
        id="spinner"
        class="spinner-border"
        role="status"
        style="display: none; position: absolute; right: 5%;"
      ></div>
      </div>
      <!--* AUTHORIZE_FORM -->    
      <section class="authorize-form">
      <div class="main">
        <form>
          <h1 class="h3 mb-3 fw-normal" id="text">Вход</h1>

          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="login"
              placeholder="name@example.com или никнейм"
            />
            <label for="login">Логин/Email</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Пароль"
            />
            <label for="password">Пароль</label>
          </div>

          <div class="checkbox mb-3">
            <label style="cursor: pointer; user-select: none;">
              <input type="checkbox" id="showPassword" style="cursor: pointer;" /> 
              <span>Показать пароль</span>
            </label>
          </div>
          <!--* LOGIN BUTTON -->
          <button type="submit" class="w-100 btn btn-lg btn-primary" style="display: block;"
          id="but_normal">
            Войти
          </button>
          <!--! LOGIN BUTTON FAILED -->
          <button type="button" class="w-100 btn btn-danger" style="display: none;"
          id="but_fail">
          Неверный логин или пароль
          </button>
          <!-- *LOGIN BUTTON SUCCESS -->
          <button
          type="button"
          class="w-100 btn btn-success"
          style="display: none"
          id="but_success"
          >
          Успешная авторизация
          </button>
          <!--todo LOGIN BUTTON WARNING -->
          <button type="button" class="w-100 btn btn-warning" style="display:none;"
          id="but_warning">
          Заполните все поля
          </button>
          <!--todo LOGIN BUTTON WARNING3 -->
          <button
          type="button"
          class="w-100 btn btn-warning"
          style="display: none"
          id="but_warning3"
          >
          Некорректный email
          </button>
          <hr class="my-4" />
          <footer class="text_container" style="text-align: center;">
          <small class="text-body-secondary" style="user-select: none"
            >&nbsp;&nbsp;&nbsp;&nbsp;Ещё не зарегестрированы?&nbsp;&nbsp;&nbsp;&nbsp;</small>
            <small class="text-body-secondary" style="user-select: none">
            Пройдите <a href="./register.html">регистрацию</a>
          </small>
        </footer>
        </form>
      </div>

    </main>
  </section>
    `;
