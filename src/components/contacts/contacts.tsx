export default function Contacts() {
  return (
    <div className="mx-3 max-w-[1536px] 2xl:mx-auto">
      {/* header */}
      <div
        className="flex justify-center text-white bg-blue-500 p-1 rounded-b-full font-bold text-xl bg-gradient-to-t via-blue-400 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHJzYrgFwoobhOUN7Y-fvH4h7Cg3a3iELTw&s)",
        }}
      >
        وب اپلیکیشن مدیریت مخاطبین
      </div>
      {/* header */}
      <div className="flex gap-1 mt-2 mx-3 flex-col sm:flex-col sm:gap-3 md:flex-row">
        {/* contacts wrapper */}
        <div className="lg:w-2/3 sm:w-full flex flex-col gap-2">
          <h2 className="flex justify-center font-bold text-xl">
            لیست کاربران
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-2 bg-slate-100 rounded overflow-y-scroll max-h-96">
            {/* contact */}
            <div className="p-4 shadow bg-slate-200 rounded">
              <div className="flex flex-col gap-1">
                <div>
                  <span>نام: </span>
                  <span>Fname Lname</span>
                </div>
                <div>
                  <span>شماره موبایل: </span>
                  <span>phone</span>
                </div>
                <div>
                  <span>نسبت: </span>
                  <span>relative</span>
                </div>
                <div>
                  <span>ایمیل: </span>
                  <span>email</span>
                </div>
                <div className="flex w-full justify-end">
                  <button
                    className="text-white bg-blue-500 px-2 py-1 self-center rounded-r"
                    onClick={() => {}}
                  >
                    ویرایش
                  </button>
                  <button
                    className="text-white bg-red-500 px-2 py-1 self-center rounded-l"
                    onClick={() => {}}
                  >
                    حذف
                  </button>
                </div>
              </div>
            </div>
            {/* contact */}
            {/* contact */}
            <div className="p-4 shadow bg-slate-200 rounded">
              <div className="flex flex-col gap-1">
                <div>
                  <span>نام: </span>
                  <span>Fname Lname</span>
                </div>
                <div>
                  <span>شماره موبایل: </span>
                  <span>phone</span>
                </div>
                <div>
                  <span>نسبت: </span>
                  <span>relative</span>
                </div>
                <div>
                  <span>ایمیل: </span>
                  <span>email</span>
                </div>
                <div className="flex w-full justify-end">
                  <button
                    className="text-white bg-blue-500 px-2 py-1 self-center rounded-r"
                    onClick={() => {}}
                  >
                    ویرایش
                  </button>
                  <button
                    className="text-white bg-red-500 px-2 py-1 self-center rounded-l"
                    onClick={() => {}}
                  >
                    حذف
                  </button>
                </div>
              </div>
            </div>
            {/* contact */}
            {/* contact */}
            <div className="p-4 shadow bg-slate-200 rounded">
              <div className="flex flex-col gap-1">
                <div>
                  <span>نام: </span>
                  <span>Fname Lname</span>
                </div>
                <div>
                  <span>شماره موبایل: </span>
                  <span>phone</span>
                </div>
                <div>
                  <span>نسبت: </span>
                  <span>relative</span>
                </div>
                <div>
                  <span>ایمیل: </span>
                  <span>email</span>
                </div>
                <div className="flex w-full justify-end">
                  <button
                    className="text-white bg-blue-500 px-2 py-1 self-center rounded-r"
                    onClick={() => {}}
                  >
                    ویرایش
                  </button>
                  <button
                    className="text-white bg-red-500 px-2 py-1 self-center rounded-l"
                    onClick={() => {}}
                  >
                    حذف
                  </button>
                </div>
              </div>
            </div>
            {/* contact */}
            {/* contact */}
            <div className="p-4 shadow bg-slate-200 rounded">
              <div className="flex flex-col gap-1">
                <div>
                  <span>نام: </span>
                  <span>Fname Lname</span>
                </div>
                <div>
                  <span>شماره موبایل: </span>
                  <span>phone</span>
                </div>
                <div>
                  <span>نسبت: </span>
                  <span>relative</span>
                </div>
                <div>
                  <span>ایمیل: </span>
                  <span>email</span>
                </div>
                <div className="flex w-full justify-end">
                  <button
                    className="text-white bg-blue-500 px-2 py-1 self-center rounded-r"
                    onClick={() => {}}
                  >
                    ویرایش
                  </button>
                  <button
                    className="text-white bg-red-500 px-2 py-1 self-center rounded-l"
                    onClick={() => {}}
                  >
                    حذف
                  </button>
                </div>
              </div>
            </div>
            {/* contact */}
          </div>
        </div>
        {/* contacts wrapper */}
        {/* add contact */}
        <div className="lg:w-1/3 sm:w-full  flex flex-col gap-3">
          <h2 className="flex justify-center font-bold text-xl">
            اضافه / ویرایش کاربران
          </h2>
          <form
            className="shadow-md p-3 flex flex-col gap-1"
            onSubmit={() => {}}
          >
            <label>
              نام:
              <br />
              <input
                value={""}
                className="px-3 py-2 shadow w-full p-1 rounded outline-none"
                type="text"
                placeholder="نام..."
                onChange={(e) => {}}
              />
            </label>
            <p className="text-red-500 text-sm">{""}</p>
            <br />
            <label>
              نام خانوادگی:
              <br />
              <input
                value={""}
                className="px-3 py-2 shadow w-full p-1 rounded outline-none"
                type="text"
                placeholder="نام خانوادکی..."
                onChange={(e) => {}}
              />
            </label>
            <p className="text-red-500 text-sm">{""}</p>
            <br />
            <label>
              شماره موبایل:
              <br />
              <input
                value={""}
                className="px-3 py-2 shadow w-full p-1 rounded placeholder-right outline-none"
                type="number"
                placeholder="شماره موبایل..."
                onChange={(e) => {}}
              />
            </label>
            <p className="text-red-500 text-sm">{""}</p>
            <br />
            <label>
              نسبت:
              <br />
              <select
                name="نسبت"
                className="shadow-md w-full p-1 rounded outline-none"
                value={""}
                onChange={(e) => {}}
              >
                <option defaultChecked value="">
                  انتخاب کنید
                </option>
                <option value="دوست">دوست</option>
                <option value="همکار">همکار</option>
              </select>
            </label>
            <p className="text-red-500 text-sm">{""}</p>
            <br />
            <label>
              ایمیل:
              <br />
              <input
                value={""}
                className="px-3 py-2 shadow w-full p-1 rounded outline-none"
                type="email"
                placeholder="ایمیل..."
                onChange={(e) => {}}
              />
            </label>
            <p className="text-red-500 text-sm">{""}</p>
            <br />
            <button
              type="submit"
              className="bg-gray-500 text-white rounded px-2 py-2 hover:bg-gray-600 sm:w-full md:w-fit"
            >
              Add contact var
            </button>
          </form>
        </div>
        {/* add contact */}
      </div>
    </div>
  );
}
