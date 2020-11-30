import Menu from './menu';
import Header from './header'
import Skills from './skills'


export default function Home() {

  return (

    <div className="grid py-20 w-3/4 min-h-screen m-auto max-w-screen-xl">

      {/* SidebarLeft */}
      <div className="w-16 h-screen fixed left-0 top-0 bg-gray-900">
        <Menu/>
      </div>

      {/* Content */}
      <div className="shadow-2xl flex flex-col">
        {/* Header */}
        <div>
          <Header/>
        </div>

        {/* Skills */}
        <div>
          <Skills/>
        </div>
      </div>


    </div>

  );
}


