import React from 'react'
import { Route } from 'react-router'
import Index from './views/Index'
import ErrorPage from './views/ErrorPage'

export const routes = (
    <Route>
      <Route path='/' component={Index} />
      <Route path='*' component={ErrorPage} />
    </Route>
)
