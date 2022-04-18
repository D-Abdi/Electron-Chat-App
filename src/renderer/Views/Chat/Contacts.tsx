export default function Contacts() {
  return (
    <table className="items-center w-full bg-transparent border-collapse">
      <thead>
      <tr>
        <th
          className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-sky-800 text-sky-300 border-sky-700">Project
        </th>
        <th
          className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-sky-800 text-sky-300 border-sky-700">Budget
        </th>
        <th
          className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-sky-800 text-sky-300 border-sky-700">Status
        </th>
        <th
          className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-sky-800 text-sky-300 border-sky-700">Users
        </th>
        <th
          className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-sky-800 text-sky-300 border-sky-700">Completion
        </th>
        <th
          className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-sky-800 text-sky-300 border-sky-700"></th>
      </tr>
      </thead>

      <tbody>

      <tr>
        <td
          className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
          <img
            src='https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144'
            alt='' className='w-10 sm:w-16 h-10 sm:h-16 rounded-full' />
            <span className="ml-3 font-bold"> Argon Design System </span></td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">$2,500 USD</td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <i className="fas fa-circle text-orange-500 mr-2"></i>pending
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <div className="flex">
            <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..."
                 className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
              <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..."
                   className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..."
                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                  <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..."
                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
          </div>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <div className="flex items-center">
            <span className="mr-2">60%</span>
            <div className="relative w-full">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                <div
                     className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
              </div>
            </div>
          </div>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
          <a href="renderer/Views/Chat/Contacts#pablo" className="text-blueGray-500 block py-1 px-3">
            <i className="fas fa-ellipsis-v"></i></a>
          <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
               id="table-dark-1-dropdown">
            <a href="renderer/Views/Chat/Contacts#pablo"
               className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Action</a><a
            href="renderer/Views/Chat/Contacts#pablo"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Another
            action</a><a href="renderer/Views/Chat/Contacts#pablo"
                         className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Something
            else here</a>
            <div className="h-0 my-2 border border-solid border-blueGray-100"></div>
            <a href="renderer/Views/Chat/Contacts#pablo"
               className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">Seprated
              link</a>
          </div>
        </td>
      </tr>

      </tbody>
    </table>
  )
}
