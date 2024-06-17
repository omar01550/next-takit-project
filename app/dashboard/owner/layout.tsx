import React from 'react'

const Layout = ({children}) => {
  return (

      <html>
          <body>
                <main className="dashboard-layout w-full flex h-full">
                     <div className="sidebar w-3/12 h-full bg-primary-100">
                          sidebar
                     </div>
                     <div className="w-full">
                          {children}
                     </div>
                </main>

          </body>
      </html>

)
}

export default Layout