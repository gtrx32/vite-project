{{-- This file is used for menu items by any Backpack v6 theme --}}
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('game') }}"><i class="la la-home nav-icon"></i>games</a></li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('message') }}"><i class="la la-home nav-icon"></i>messages</a></li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('review') }}"><i class="la la-home nav-icon"></i>reviews</a></li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('log') }}"><i class="la la-home nav-icon"></i>logs</a></li>

<x-backpack::menu-item title="Users" icon="la la-question" :link="backpack_url('user')" />