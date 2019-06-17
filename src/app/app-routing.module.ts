import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './posts/post-list/post-list.component';
import { CategoryComponent } from './posts/category/category.component';
import { TagComponent } from './posts/tag/tag.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { PageBaseComponent } from './pages/page-base.component';

import { PostResolver } from './shared/wp-services/resolvers/post.resolver';
import { PageResolver } from './shared/wp-services/resolvers/page.resolver';
import { CategoryResolver } from './shared/wp-services/resolvers/category.resolver';
import { TagResolver } from './shared/wp-services/resolvers/tag.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PostListComponent,
    resolve: {
      page: PageResolver
    }
  },
  {
    path: 'post/:slug',
    component: SinglePostComponent,
    resolve: {
      post: PostResolver
    }
  },
  {
    path: 'category',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '../error-404'
      },
      {
        path: ':cat-slug',
        component: CategoryComponent,
        resolve: {
          category: CategoryResolver
        }
      },
      {
        path: ':parent-cat-slug/:cat-slug',
        component: CategoryComponent,
        resolve: {
          category: CategoryResolver
        }
      }
      // you can create here as many nested routes here as you want to support
    ]
  },
  {
    path: 'tag/:slug',
    component: TagComponent,
    resolve: {
      tag: TagResolver
    }
  },
  {
    path: ':slug',
    component: PageBaseComponent,
    resolve: {
      page: PageResolver
    }
  },
  {
    path: '**',
    redirectTo: 'error-404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    PostResolver,
    PageResolver,
    CategoryResolver,
    TagResolver
  ]
})

export class AppRoutingModule { }
