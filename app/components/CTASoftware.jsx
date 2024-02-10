import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
   ArrowDownCircleIcon,
   ArrowPathIcon,
   ArrowUpCircleIcon,
   EllipsisHorizontalIcon,
   PlusIcon,
} from '@heroicons/react/20/solid';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

export function SoftwareSection() {
   return (
      <div className="mt-24 sm:mt-32 lg:mt-40">
         <Container className="">
            <FadeIn>
               <main>
                  <div className="relative isolate overflow-hidden pt-16">
                     {/* Secondary navigation */}
                     <header className="pb-4 pt-6 sm:pb-6">
                        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
                           <h1 className="text-base font-semibold leading-7 text-neutral-950">
                              Manage Invoices
                           </h1>
                           <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-neutral-200 sm:pl-6 sm:leading-7">
                              {secondaryNavigation.map((item) => (
                                 <a
                                    key={item.name}
                                    href={item.href}
                                    className={
                                       item.current
                                          ? 'text-indigo-600'
                                          : 'text-neutral-700'
                                    }
                                 >
                                    {item.name}
                                 </a>
                              ))}
                           </div>
                           <a
                              href="#"
                              className="ml-auto flex items-center gap-x-1 rounded-md bg-centroIndigo px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-centroIndigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-centroIndigo"
                           >
                              <PlusIcon
                                 className="-ml-1.5 h-5 w-5"
                                 aria-hidden="true"
                              />
                              New invoice
                           </a>
                        </div>
                     </header>

                     {/* Stats */}
                     <div className="border-b border-b-neutral-950/10 bg-neutral-50 lg:border-t lg:border-t-neutral-950/5">
                        <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
                           {stats.map((stat, statIdx) => (
                              <div
                                 key={stat.name}
                                 className={classNames(
                                    statIdx % 2 === 1
                                       ? 'sm:border-l'
                                       : statIdx === 2
                                         ? 'lg:border-l'
                                         : '',
                                    'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-neutral-950/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8'
                                 )}
                              >
                                 <dt className="text-sm font-medium leading-6 text-neutral-500">
                                    {stat.name}
                                 </dt>
                                 <dd
                                    className={classNames(
                                       stat.changeType === 'negative'
                                          ? 'text-centroRed'
                                          : 'text-neutral-700',
                                       'text-xs font-medium'
                                    )}
                                 >
                                    {stat.change}
                                 </dd>
                                 <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-neutral-950">
                                    {stat.value}
                                 </dd>
                              </div>
                           ))}
                        </dl>
                     </div>
                  </div>

                  <div className="space-y-16 py-16 xl:space-y-20">
                     {/* Recent activity table */}
                     <div>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                           <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-neutral-950 lg:mx-0 lg:max-w-none">
                              Recent activity
                           </h2>
                        </div>
                        <div className="mt-6 overflow-hidden border-t border-neutral-100">
                           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                                 <table className="w-full text-left">
                                    <thead className="sr-only">
                                       <tr>
                                          <th>Amount</th>
                                          <th className="hidden sm:table-cell">
                                             Client
                                          </th>
                                          <th>More details</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       {days.map((day) => (
                                          <Fragment key={day.dateTime}>
                                             <tr className="text-sm leading-6 text-neutral-950">
                                                <th
                                                   scope="colgroup"
                                                   colSpan={3}
                                                   className="relative isolate py-2 font-semibold"
                                                >
                                                   <time
                                                      dateTime={day.dateTime}
                                                   >
                                                      {day.date}
                                                   </time>
                                                   <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-neutral-200 bg-neutral-50" />
                                                   <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-neutral-200 bg-neutral-50" />
                                                </th>
                                             </tr>
                                             {day.transactions.map(
                                                (transaction) => (
                                                   <tr key={transaction.id}>
                                                      <td className="relative py-5 pr-6">
                                                         <div className="flex gap-x-6">
                                                            <transaction.icon
                                                               className="hidden h-6 w-5 flex-none text-neutral-400 sm:block"
                                                               aria-hidden="true"
                                                            />
                                                            <div className="flex-auto">
                                                               <div className="flex items-start gap-x-3">
                                                                  <div className="text-sm font-medium leading-6 text-neutral-950">
                                                                     {
                                                                        transaction.amount
                                                                     }
                                                                  </div>
                                                                  <div
                                                                     className={classNames(
                                                                        statuses[
                                                                           transaction
                                                                              .status
                                                                        ],
                                                                        'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                                                                     )}
                                                                  >
                                                                     {
                                                                        transaction.status
                                                                     }
                                                                  </div>
                                                               </div>
                                                               {transaction.tax ? (
                                                                  <div className="mt-1 text-xs leading-5 text-neutral-500">
                                                                     {
                                                                        transaction.tax
                                                                     }{' '}
                                                                     tax
                                                                  </div>
                                                               ) : null}
                                                            </div>
                                                         </div>
                                                         <div className="absolute bottom-0 right-full h-px w-screen bg-neutral-100" />
                                                         <div className="absolute bottom-0 left-0 h-px w-screen bg-neutral-100" />
                                                      </td>
                                                      <td className="hidden py-5 pr-6 sm:table-cell">
                                                         <div className="text-sm leading-6 text-neutral-950">
                                                            {transaction.client}
                                                         </div>
                                                         <div className="mt-1 text-xs leading-5 text-neutral-500">
                                                            {
                                                               transaction.description
                                                            }
                                                         </div>
                                                      </td>
                                                      <td className="py-5 text-right">
                                                         <div className="flex justify-end">
                                                            <a
                                                               href={
                                                                  transaction.href
                                                               }
                                                               className="text-sm font-medium leading-6 text-centroIndigo hover:text-centroIndigo/50"
                                                            >
                                                               View
                                                               <span className="hidden sm:inline">
                                                                  {' '}
                                                                  transaction
                                                               </span>
                                                               <span className="sr-only">
                                                                  , invoice #
                                                                  {
                                                                     transaction.invoiceNumber
                                                                  }
                                                                  ,{' '}
                                                                  {
                                                                     transaction.client
                                                                  }
                                                               </span>
                                                            </a>
                                                         </div>
                                                         <div className="mt-1 text-xs leading-5 text-neutral-500">
                                                            Invoice{' '}
                                                            <span className="text-neutral-950">
                                                               #
                                                               {
                                                                  transaction.invoiceNumber
                                                               }
                                                            </span>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                )
                                             )}
                                          </Fragment>
                                       ))}
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Recent client list*/}
                     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                           <div className="flex items-center justify-between">
                              <h2 className="text-base font-semibold leading-7 text-neutral-950">
                                 Recent clients
                              </h2>
                              <a
                                 href="#"
                                 className="text-sm font-semibold leading-6 text-centroIndigo hover:text-centroIndigo/50"
                              >
                                 View all
                                 <span className="sr-only">, clients</span>
                              </a>
                           </div>
                           <ul
                              role="list"
                              className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
                           >
                              {clients.map((client) => (
                                 <li
                                    key={client.id}
                                    className="overflow-hidden rounded-xl border border-neutral-200"
                                 >
                                    <div className="flex items-center gap-x-4 border-b border-neutral-950/5 bg-neutral-50 p-6">
                                       <img
                                          src={client.imageUrl}
                                          alt={client.name}
                                          className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-neutral-950/10"
                                       />
                                       <div className="text-sm font-medium leading-6 text-neutral-950">
                                          {client.name}
                                       </div>
                                       <Menu
                                          as="div"
                                          className="relative ml-auto"
                                       >
                                          <Menu.Button className="-m-2.5 block p-2.5 text-neutral-400 hover:text-neutral-500">
                                             <span className="sr-only">
                                                Open options
                                             </span>
                                             <EllipsisHorizontalIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                             />
                                          </Menu.Button>
                                          <Transition
                                             as={Fragment}
                                             enter="transition ease-out duration-100"
                                             enterFrom="transform opacity-0 scale-95"
                                             enterTo="transform opacity-100 scale-100"
                                             leave="transition ease-in duration-75"
                                             leaveFrom="transform opacity-100 scale-100"
                                             leaveTo="transform opacity-0 scale-95"
                                          >
                                             <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-neutral-950/5 focus:outline-none">
                                                <Menu.Item>
                                                   {({ active }) => (
                                                      <a
                                                         href="#"
                                                         className={classNames(
                                                            active
                                                               ? 'bg-neutral-50'
                                                               : '',
                                                            'block px-3 py-1 text-sm leading-6 text-neutral-950'
                                                         )}
                                                      >
                                                         View
                                                         <span className="sr-only">
                                                            , {client.name}
                                                         </span>
                                                      </a>
                                                   )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                   {({ active }) => (
                                                      <a
                                                         href="#"
                                                         className={classNames(
                                                            active
                                                               ? 'bg-neutral-50'
                                                               : '',
                                                            'block px-3 py-1 text-sm leading-6 text-neutral-950'
                                                         )}
                                                      >
                                                         Edit
                                                         <span className="sr-only">
                                                            , {client.name}
                                                         </span>
                                                      </a>
                                                   )}
                                                </Menu.Item>
                                             </Menu.Items>
                                          </Transition>
                                       </Menu>
                                    </div>
                                    <dl className="-my-3 divide-y divide-neutral-100 px-6 py-4 text-sm leading-6">
                                       <div className="flex justify-between gap-x-4 py-3">
                                          <dt className="text-neutral-500">
                                             Last invoice
                                          </dt>
                                          <dd className="text-neutral-700">
                                             <time
                                                dateTime={
                                                   client.lastInvoice.dateTime
                                                }
                                             >
                                                {client.lastInvoice.date}
                                             </time>
                                          </dd>
                                       </div>
                                       <div className="flex justify-between gap-x-4 py-3">
                                          <dt className="text-neutral-500">
                                             Amount
                                          </dt>
                                          <dd className="flex items-start gap-x-2">
                                             <div className="font-medium text-neutral-950">
                                                {client.lastInvoice.amount}
                                             </div>
                                             <div
                                                className={classNames(
                                                   statuses[
                                                      client.lastInvoice.status
                                                   ],
                                                   'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                                                )}
                                             >
                                                {client.lastInvoice.status}
                                             </div>
                                          </dd>
                                       </div>
                                    </dl>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               </main>
            </FadeIn>
         </Container>
      </div>
   );
}

const secondaryNavigation = [
   { name: 'Last 7 days', href: '#', current: true },
   { name: 'Last 30 days', href: '#', current: false },
   { name: 'All-time', href: '#', current: false },
];
const stats = [
   {
      name: 'Revenue',
      value: '$405,091.00',
      change: '+4.75%',
      changeType: 'positive',
   },
   {
      name: 'Overdue invoices',
      value: '$12,787.00',
      change: '+54.02%',
      changeType: 'negative',
   },
   {
      name: 'Outstanding invoices',
      value: '$245,988.00',
      change: '-1.39%',
      changeType: 'positive',
   },
   {
      name: 'Expenses',
      value: '$30,156.00',
      change: '+10.18%',
      changeType: 'negative',
   },
];
const statuses = {
   Paid: 'text-white bg-green-600 ring-green-600/20',
   Withdraw: 'text-neutral-600 bg-neutral-50 ring-neutral-500/10',
   Overdue: 'text-white bg-centroRed ring-centroRed/10',
};
const days = [
   {
      date: 'Today',
      dateTime: '2024-03-22',
      transactions: [
         {
            id: 1,
            invoiceNumber: '00012',
            href: '#',
            amount: '$7,600.00 USD',
            tax: '$500.00',
            status: 'Paid',
            client: 'Reform',
            description: 'Website redesign',
            icon: ArrowUpCircleIcon,
         },
         {
            id: 2,
            invoiceNumber: '00011',
            href: '#',
            amount: '$10,000.00 USD',
            status: 'Withdraw',
            client: 'Tom Cook',
            description: 'Salary',
            icon: ArrowDownCircleIcon,
         },
         {
            id: 3,
            invoiceNumber: '00009',
            href: '#',
            amount: '$2,000.00 USD',
            tax: '$130.00',
            status: 'Overdue',
            client: 'Tuple',
            description: 'Logo design',
            icon: ArrowPathIcon,
         },
      ],
   },
   {
      date: 'Yesterday',
      dateTime: '2024-03-21',
      transactions: [
         {
            id: 4,
            invoiceNumber: '00010',
            href: '#',
            amount: '$14,000.00 USD',
            tax: '$950.00',
            status: 'Paid',
            client: 'SavvyCal',
            description: 'Website redesign',
            icon: ArrowUpCircleIcon,
         },
      ],
   },
];
const clients = [
   {
      id: 1,
      name: 'Tuple',
      imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
      lastInvoice: {
         date: 'December 13, 2023',
         dateTime: '2023-12-13',
         amount: '$2,000.00',
         status: 'Overdue',
      },
   },
   {
      id: 2,
      name: 'SavvyCal',
      imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
      lastInvoice: {
         date: 'January 22, 2024',
         dateTime: '2024-01-22',
         amount: '$14,000.00',
         status: 'Paid',
      },
   },
   {
      id: 3,
      name: 'Reform',
      imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
      lastInvoice: {
         date: 'January 23, 2024',
         dateTime: '2024-01-23',
         amount: '$7,600.00',
         status: 'Paid',
      },
   },
];

function classNames(...classes) {
   return classes.filter(Boolean).join(' ');
}