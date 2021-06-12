import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Inicio, Asesores, Propiedades } from '../Pages'

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route path="/asesores" component={Asesores} />
      <Route path="/propiedades" component={Propiedades} />

      <Redirect to="/" />
    </Switch>
  )
}

export default AppRouter
