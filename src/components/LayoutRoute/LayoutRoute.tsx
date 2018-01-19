import { Route, RouteProps } from 'react-router-dom'
import React from 'react'

type Props = {
  // tslint:disable-next-line
  layout?: React.ComponentType<any>
} & RouteProps

const LayoutRoute = (props: Props) => {
  let { layout: Layout, component: Component, ...rest} = props
  if (Layout) {
    return (
      <Route 
        {...rest} 
        render={matchProps => (
          <Layout>
            <Component {...matchProps}/>
          </Layout> 
        )}
      />
    )
  } else {
    return <Route {...rest} component={Component}/>
  }
}

export default LayoutRoute