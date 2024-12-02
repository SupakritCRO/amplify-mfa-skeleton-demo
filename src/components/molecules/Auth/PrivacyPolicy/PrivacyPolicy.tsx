import { Dispatch, SetStateAction } from 'react'
import ModalContainer from '../../Modal/ModalContainer'

interface PrivacyPlocyProps {
  showPolicy: boolean
  setShowPolicy: Dispatch<SetStateAction<boolean>>
}

const PrivacyPolicy = ({ showPolicy, setShowPolicy }: PrivacyPlocyProps) => {
  return (
    <ModalContainer
      isOpenModal={showPolicy}
      setIsOpenModal={setShowPolicy}
      className='w-[60vw] h-[60vh]'
    >
      <div className='w-full h-full overflow-auto px-12'>
        <div className='bg-white text-black align-center '>
          <h1 className='text-xl font-bold text-center'>PRIVACY POLICY</h1>
          <div className='font-bold text-base my-2 text-center align-center'>
            PERSONAL DATA PRIVACY NOTICE FOR PROCESSES RELATED TO CUSTOMERS OF
            CHAROEN POKPHAND GROUP COMPANY LIMITED
          </div>
          <div className='mt-8 mb-4 text-base font-bold'>
            1. General Provisions
          </div>
          <div className='whitespace-pre-line indent-7 font-normal leading-8'>
            For the purpose of complying with the Personal Data Protection Act
            B.E. 2562 (2019) and subordinate laws issued thereunder, including
            any amendments which may be made thereto, ({' '}
            <span className='font-bold'>
              “Laws on Personal Data Protection”
            </span>{' '}
            ) Charoen Pokphand Group Company Limited ({' '}
            <span className='font-bold'>“Company”</span> ) has prepared this
            Personal Data Privacy Notice for processes related to customers of
            Charoen Pokphand Group Company Limited ({' '}
            <span className='font-bold'>“Privacy Notice”</span> ) to inform you
            regarding how the Company handles information which can or may
            identify you, whether directly or indirectly, according to the Laws
            on Personal Data Protection ({' '}
            <span className='font-bold'>“Personal Data”</span> ), such as the
            methods by which Personal Data is collected, used, disclosed or
            dealt with, whether by manual or automated means, such as recording,
            organization, storage, adaptation or alteration, retrieval, sending,
            transfer, disclosure or making available by any means, alignment,
            combination, prohibition of access or restriction, erasure or
            destruction (<span className='font-bold'>“Processing”</span>,{' '}
            <span className='font-bold'>“Process”</span>,{' '}
            <span className='font-bold'>“Processes”</span> or{' '}
            <span className='font-bold'>“Processed”</span> ), as well as to
            notify you of the purposes for such Processing, the retention period
            of Personal Data, and your rights as the data subject. In this
            regard, the Company recommends that you read and understand the
            following terms under the Privacy Notice:
          </div>
          <div className='mt-8 mb-4 text-base font-bold'>
            2. Groups or Categories of Persons whom the Company Collects
            Personal Data
          </div>
          <div className='my-2 indent-7 font-normal leading-8'>
            2.1 Customers which means persons who purchase products and/or use
            services of the Company and/or those who are expected to purchase
            products and/or use the services of the Company (prospective
            customers), or any other persons having similar characteristics,
            such as persons who participate in activities, seminars, or bids,
            website users, application users, persons who make contact to
            request to receive information or services from the Company, and
            persons who provide responses to surveys concerning products and/or
            services of the Company, etc.
          </div>
          <div className='my-2 indent-7 font-normal leading-8'>
            2.2 Persons related to customers which means persons who are related
            to or are representatives of customers, such as executives,
            directors, employees, representatives, or personnel of customers who
            are juristic persons, including persons whose Personal Data appear
            in relevant documents and processes, such as managers, purchasers,
            consignees, and cheque payers, etc.
          </div>
          <div className='mt-8 mb-4 text-base font-bold'>
            3. How the Company Collects and Receives your Personal Data
          </div>
          <div className='my-2 indent-7 font-normal leading-8'>
            3.1 The Company collects and receives your Personal Data via the
            following methods:
          </div>
          <div className='grid ml-[3vw]'>
            <div>
              (a){' '}
              <span className='font-bold'>
                Personal Data which you directly provide to the Company
              </span>
            </div>
            <div className='my-2'>
              You may directly provide your Personal Data to the Company, such
              as
            </div>
            <div>
              <ul className='list-disc'>
                <li>
                  When you engage in communications or make enquiries, provide
                  comments or feedbacks to the Company, regardless of whether in
                  written or oral communications through the website,
                  application, by phone, e-mail, fax, mail, by face-to-face
                  interaction or by any other means;
                </li>
                <li>
                  When you express an intention to purchase products or use
                  services of the Company, enter into a contract with the
                  Company, or deliver documents containing Personal Data to the
                  Company; and
                </li>
                <li>
                  When you participate in marketing activities, lucky draws,
                  events or any other activities organized by or on behalf of
                  the Company, etc.
                </li>
              </ul>
            </div>
            <div>
              (b){' '}
              <span className='font-bold'>
                Personal Data which the Company automatically collects from you
              </span>
            </div>
            <div className='my-4'>
              The Company may collect your Personal Data by automated means such
              as the use of Cookies or other similar technologies. For more
              details, please see the Company’s Cookie Policy
            </div>
            <div className='my-4'>
              (c){' '}
              <span className='font-bold'>
                Personal Data which the Company receives from third parties
              </span>
            </div>
            <div className='my-4'>
              The Company may receive your Personal Data from third parties,
              such as
            </div>
            <div>
              <ul className='list-disc'>
                <li>
                  The collection of information from various service providers
                  of the Company, such as website service providers, application
                  service providers, service providers for public relations and
                  products/services recommendation, and data collection service
                  providers, etc.
                </li>
                <li>
                  In some cases, the Company may collect your Personal Data from
                  public data sources, data sources containing information
                  relating to your business, or sources containing information
                  relating to trades, irrespective of whether you have disclosed
                  the Personal Data by yourself or have provided consent to
                  somebody else to disclose such Personal Data.
                </li>
              </ul>
            </div>
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            3.2 In collecting your Personal Data, you will be informed of the
            details as set out in this Privacy Notice, including but not limited
            to, the lawful basis for the collection, use, disclosure and/or
            Processing of Personal Data in accordance with the lawful purposes,
            or in the event that the Laws on Personal Data Protection require
            your consent for any Processing of Personal Data, the Company will
            request your explicit consent.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            3.3 Where the Company has previously collected your Personal Data
            before the Laws on Personal Data Protection have become effective,
            the Company will continue to collect and use your Personal Data in
            accordance with the original purposes of collection. In this regard,
            you have the right to withdraw your consent by contacting the
            Company using the contact details set out in Clause 9 of this
            Privacy Notice. However, the Company reserves the right to consider
            your request for the withdrawal of consent and proceed in accordance
            with the Laws on Personal Data Protection.
          </div>
          <div className='mt-8 mb-4 text-base font-bold'>
            4. Collected Personal Data
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            Your Personal Data that is collected and Processed under this
            Privacy Notice, regardless of whether such Personal Data was
            directly provided by you to the Company or automatically collected
            from you by the Company, or was provided to the Company by third
            parties, includes the following:
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            4.1 Personal information, such as first name, last name, nickname,
            date/month/year of birth, age, sex, national identification number,
            photograph, and signature, etc.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            4.2 Contact information, such as address as stated on the national
            identification card, address as stated in the house registration
            book, delivery address, billing address, telephone number, fax
            number, e-mail, Line ID, and details of person who may be contacted
            in case of emergency, etc.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            4.3 Customer business information, such as type of business, details
            concerning the customer’s factory (such as name, registration
            number, location, and contact details, etc.), car number plate and
            type of car, and term of trading, etc.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            4.4 Information concerning payment, such as the monetary amount, the
            credit limit, the payment terms, the account number, Personal Data
            which appears in the invoice, tax invoice, receipt, receipt voucher,
            and debit application form, etc.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            4.5 Information that is used as supporting evidence in the Company’s
            customer registration or execution of transactions, such as Personal
            Data which appears in a copy of the national identification card,
            copy of passport, copy of house registration book, copy of change of
            name certificate, copy of factory license, registration form, copy
            documents of title over land, customer’s account opening form,
            documents certifying non-related parties, power of attorney, copy of
            company affidavit, copy of PhorPor. 09/20, map, security documents
            (such as title deed, bank guarantee, and personal guarantee), sale
            and purchase agreement or any other agreements relating to the
            transaction, and delivery order, etc.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            4.6 Technical information, such as log file, IP Address, and
            information that the Company collects through the use of Cookies or
            other similar technologies, etc.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            4.7 Other information, such as voice recording of conversations, and
            photo and video recording by means of CCTV, etc.
          </div>
          <div className='mt-8 mb-4 text-base font-bold'>
            5. Purposes and Lawful Basis for the Collection, Use, Disclosure and
            Processing of Personal Data
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            5.1 The Company Processes your Personal Data for the purposes under
            lawful basis as follows (collectively, the “Purposes”):
          </div>
          <div className='mt-2 grid grid-cols-[5%,35%,60%,] gap-1'>
            <div className='border border-x-0'>No.</div>
            <div className='border border-x-0 font-bold text-center'>
              Purposes
            </div>
            <div className='border border-x-0 font-bold text-center'>
              Lawful basis of the Processing
            </div>
            <div>(a)</div>
            <div className='p-3'>
              For the purpose of selection of bidders in the product selling of
              the Company and any management related to the auction
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li>
                  Legitimate interest basis: The Processing of Personal Data of
                  bidders or persons related to the bidders (in case bidders are
                  juristic persons) is necessary for the legitimate interests of
                  the Company in its auction management and related process,
                  such as bidder qualification considerations, communications,
                  auction summary, and evidence collection in relation to the
                  winning bidders, etc.
                </li>
                <li>
                  Contractual basis: The Processing of Personal Data of bidder
                  is necessary for the entering into a contract with bidder in
                  case of winning, including buying and selling of products with
                  the winning bidder, etc.
                </li>
              </ul>
            </div>
            <div>(b)</div>
            <div className='p-3'>
              For the purpose of entering into agreements and providing
              collateral
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li>
                  Contractual basis: The Processing of Personal Data of
                  customers or any other persons having similar characteristics
                  is necessary for the entry into agreements and other relevant
                  processes, such as checking of evidence for the entry into
                  agreements, consideration of credit limit, and providing
                  collateral, etc.
                </li>
                <li>
                  Legitimate interest basis: Where the customers or any other
                  persons having similar characteristics are juristic persons,
                  the Processing of Personal Data of persons related to the
                  customers or any other persons having similar characteristics
                  is necessary for the legitimate interests of the Company in
                  its business operations, such as the management of contracts,
                  verification of the identity of customers, consideration of
                  the qualifications of customers, etc.
                </li>
              </ul>
            </div>
            <div>(c)</div>
            <div className='p-3'>
              For the purpose of management of customer orders or any other
              persons having similar characteristics
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li>
                  Contractual basis: The Processing of Personal Data of
                  customers or any other persons having similar characteristics
                  is necessary for the performance of obligations in a sales and
                  service agreement to which the customer or any other persons
                  having similar characteristics is a party, such as purchase
                  via any means whether directly by the Company’s method or
                  third parties’ method, such as via website or other means,
                  etc.
                </li>
                <li>
                  Legitimate interest basis: Where the customer or any other
                  persons having similar characteristics are juristic persons,
                  the Processing of Personal Data of persons related to the
                  customers or any other persons having similar characteristics
                  is necessary for the legitimate interests of the Company in
                  its business operations, such as management of customer’s
                  order, and verification of the identity of customers, etc.
                </li>
              </ul>
            </div>
            <div>(d)</div>
            <div className='p-3'>
              For the purpose of product and/or service preparation and other
              relevant transactions
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li>
                  Contractual basis: The Processing of Personal Data of
                  customers or any other persons in similar manners is necessary
                  for the performance of obligations in agreements to which the
                  customer or any other persons having similar characteristics
                  is a party, such as arranging shipments of products, billing,
                  confirmation of outstanding debt, and delivery of receipts to
                  the customers or any other persons in similar manners, etc.
                </li>
                <li>
                  Legitimate interest basis: Where the customer or any other
                  persons having similar characteristics are juristic persons,
                  the Processing of Personal Data of persons related to the
                  customers or any other persons having similar characteristics
                  is necessary for the legitimate interests of the Company in
                  its business operations, such as communicating with customers,
                  etc.
                </li>
              </ul>
            </div>
            <div>(e)</div>
            <div className='p-3'>
              For the purpose of changing information relating to customers in
              the Company’s system
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li>
                  Legitimate interest basis: The Processing of Personal Data of
                  customers or persons related to the customers or any other
                  persons having similar characteristics is necessary for the
                  legitimate interests of the Company in facilitating customers,
                  persons related to the customers, or any other persons having
                  similar characteristics to edit their information in the
                  Company’s system in order to make it accurate, up-to-date,
                  complete, and not to cause any misunderstanding.
                </li>
              </ul>
            </div>
            <div>(f)</div>
            <div className='p-3'>
              For the purpose of receiving complaints from customers, persons
              related to the customers, or any other persons having similar
              characteristics
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li>
                  Legitimate interest basis: The Processing of Personal Data of
                  customers or any other persons having similar characteristics
                  is necessary for the legitimate interests of the Company in
                  facilitating customers, persons related to the customers, or
                  any other persons having similar characteristics in
                  complaining or providing comments in order to improve the
                  quality of services provided by the Company.
                </li>
              </ul>
            </div>
            <div>(g)</div>
            <div className='p-3'>
              For the purpose of public relations and marketing activities of
              the Company
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li>
                  Consent basis: Where the Company proceeds with any marketing
                  activities, such as sending marketing messages to customers,
                  taking photographs or recording videos of customers in order
                  to process and publicize marketing activities through various
                  channels, the Company will undertake the activities by relying
                  on the consent received from you.
                </li>
              </ul>
            </div>
            <div>(h)</div>
            <div className='p-3'>
              For the purpose of analyzing your use of websites, applications,
              or other media in order to improve the quality of services of the
              Company or for marketing purposes
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li>
                  Legitimate interest basis: The Processing of your Personal
                  Data from the use of website, application, or other media is
                  necessary for the legitimate interests of the Company in its
                  business operations and improvement of quality of services,
                  such as improvement of website, application, or other means,
                  improvement of product and service quality, as well as
                  improvement of defects and problems in relation to the
                  products and services.
                </li>
                <li>
                  Consent basis: In case where the Company collects and
                  Processes your Personal Data in order to analyze and advertise
                  products/services based on your behavior, or conduct direct
                  marketing campaigns, or in the case where the Laws on Personal
                  Data Protection require your consent, the Company will
                  undertake such actions by relying on the consent received from
                  you.
                </li>
              </ul>
            </div>
            <div>(i)</div>
            <div className='p-3'>
              For the purpose of complying with the laws relating to the
              Company’s business and legitimate orders of government agencies
              and relevant officers
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li></li>Legal basis: To act in compliance with the applicable
                laws of the Company, such as taxation law, Laws on Personal Data
                Protection, and legitimate orders of government agencies and
                relevant officers, such as Office of the Personal Data
                Protection Commission (PDPC Office), etc.
              </ul>
            </div>
            <div>(j)</div>
            <div className='p-3'>
              For the purpose of complying with the laws relating to the
              Company’s business and legitimate orders of government agencies
              and relevant officers
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li>
                  Legal basis: To act in compliance with the applicable laws of
                  the Company, such as taxation law, Laws on Personal Data
                  Protection, and legitimate orders of government agencies and
                  relevant officers, such as Office of the Personal Data
                  Protection Commission (PDPC Office), etc.
                </li>
              </ul>
            </div>
            <div>(k)</div>
            <div className='p-3'>
              For the purpose of establishment, compliance, exercise or defense
              of legal claims of the Company
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li>
                  Legitimate interest basis: The Processing of Personal Data is
                  necessary for the establishment, compliance, exercise or
                  defense of legal claims in various stages according to the
                  law, such as investigation and/or inquiry by government
                  officials, case preparation, prosecution and/or pursuit of the
                  case in court, etc.
                </li>
              </ul>
            </div>
            <div>(l)</div>
            <div className='p-3'>
              For the purpose of monitoring, protecting and ensuring the
              security of persons and properties of the Company
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li>
                  Legitimate interest basis: The Processing of Personal Data is
                  necessary for the legitimate interests of the Company in
                  monitoring, protecting and ensuring the security of properties
                  of the Company. For example, the CCTV footages can be used to
                  prevent loss or damage to the Company’s properties or to track
                  properties or claim damages in case where the properties of
                  the Company are lost or damaged, etc.
                </li>
                <li>
                  Preventing or suppressing danger to a person’s life, body, or
                  health basis: The Processing of Personal Data is necessary for
                  the benefit in monitoring, preventing, or suppressing any
                  circumstances which may be dangerous to person’s life, body,
                  or health.
                </li>
              </ul>
            </div>
            <div>(m)</div>
            <div className='p-3'>
              For any transaction that is necessary and beneficial to you or
              those which are directly related to the purposes set forth above
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li>
                  Legitimate interest basis: The Processing of Personal Data is
                  necessary for the legitimate interests of the Company in
                  carrying out any transactions which are necessary for the
                  Company and/or beneficial to you or directly related to the
                  purposes set forth above. In this regard, where the Laws on
                  Personal Data Protection require your consent for any
                  Processing of Personal Data, the Company will explicitly
                  request the consent from you.
                </li>
              </ul>
            </div>
            <div>(n)</div>
            <div className='p-3'>
              For other purposes that the Company will notify you of
            </div>
            <div className='p-3'>
              <ul className='list-disc'>
                <li>
                  The Company will notify you of any other purposes that cause
                  the Company to Process your Personal Data other than the
                  purposes set forth above or when the Company changes the
                  original purposes that were set forth. In this regard, where
                  the Laws on Personal Data Protection require your consent for
                  any Processing of Personal Data, the Company will explicitly
                  request the consent from you.
                </li>
              </ul>
            </div>
          </div>
          <div className='m-4 indent-7 font-normal leading-8'>
            5.2 Your Personal Data, which the Company will Process for the
            Purposes set forth in Clause 5.1 above that relate to the compliance
            with laws or contracts or are necessary for entering into contracts
            with you, is the data which is necessary for the achievement of the
            said Purposes. If you do not intend to provide such Personal Data to
            the Company, there may be legal implications or the Company may not
            be able to perform its duties pursuant to the contract which has
            been entered into with you or may not be able to enter into a
            contract with you (as the case may be). In such event, it may be
            necessary for the Company to decline to enter into the contract with
            you or to cancel the sale and purchase or the provision of any
            relevant services to you, whether in whole or in part.
          </div>
          <div className='m-4 indent-7 font-normal leading-8'>
            5.3 In the event that the Company will Process your Personal Data in
            a manner and/or for purposes which are not consistent with the
            Purposes set forth above, the Company will put in place additional
            policies or notifications for the protection of Personal Data and/or
            send notice to you to provide explanations concerning such
            Processing of Personal Data. In this regard, you should review such
            additional policies or notifications in conjunction with this
            Privacy Notice (as the case maybe).
          </div>
          <div className='mt-8 mb-4 text-base font-bold'>
            6. Disclosure of Personal Data
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            6.1 The Company may disclose your Personal Data in accordance with
            the Purposes and the rules prescribed under the laws to the
            following entities and persons:
          </div>
          <div className='grid ml-3'>
            <div className='my-4  indent-7 font-normal leading-8'>
              (a) Charoen Pokphand Group, in and outside Thailand, including
              executives, directors, staff, employees and/or relevant in-house
              personnel, and as necessary on a need-to-know basis for the
              Processing of your Personal Data.
            </div>
            <div className='my-4 indent-7 font-normal leading-8'>
              (b) Business partners, service providers, and data processors
              designated or hired by the Company to perform duties in connection
              with the management/Processing of Personal Data for the Company in
              the provision of various services, such as information
              technological services, data recording services, payment services,
              mailing services, delivery services, printing services, data
              analysis services, research services, marketing services, or any
              other services which may be beneficial to you or relevant to the
              Company’s business operation.
            </div>
            <div className='my-4 indent-7 font-normal leading-8'>
              (c) Advisors of the Company, such as legal advisors, lawyers,
              auditors, or any other internal and external experts of the
              Company.
            </div>
            <div className='my-4 indent-7 font-normal leading-8'>
              (d) Relevant governmental agencies which have supervisory duties
              under the laws or which have requested the disclosure pursuant to
              their lawful powers or relevant to the legal process or which were
              granted permission pursuant to applicable laws, such as Revenue
              Department, Office of the Personal Data Protection Commission,
              Office of Trade Competition Commission, Royal Thai Police, Office
              of the Attorney General, and court, etc.
            </div>
            <div className='my-4 indent-7 font-normal leading-8'>
              (e) Any persons or other entities that you have given consent to
              disclose your Personal Data to, such as the disclosure of
              processed images of activities through various media platforms of
              the Company to the general public.
            </div>
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            6.2 The disclosure of your Personal Data to third parties shall be
            in accordance with the Purposes or other purposes permitted by law,
            provided that if the law requires your consent to be provided, the
            Company will request for your prior consent.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            6.3 In the event that the Company discloses your Personal Data to
            third parties, the Company will put in place appropriate safeguards
            to protect the Personal Data that has been disclosed and to comply
            with the standards and duties relating to the protection of Personal
            Data as prescribed by the Laws on Personal Data Protection. Where
            the Company sends or transfers your Personal Data outside Thailand,
            the Company will ensure that the recipient country, the
            international organization or such overseas recipient has a
            sufficient standard for the protection of Personal Data. In some
            cases, the Company may request your consent for the transfer of your
            Personal Data outside Thailand, subject to the requirements under
            Laws on Personal Data Protection.
          </div>
          <div className='mt-8 mb-4 text-base font-bold'>
            7. Retention Period
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            The Company will retain your Personal Data for the period necessary
            to fulfil the Purposes for which the Personal Data was Processed,
            whereby the retention period will vary depending on the Purposes for
            which such Personal Data was collected and Processed. The Company
            will retain Personal Data for the period prescribed under the
            applicable laws (if any) by considering the statute of limitations
            under the laws for any legal proceedings that may occur from or in
            relation to the documents or Personal Data collected by the Company
            and having regard to the Company’s business practices and relevant
            business in relation to each category of Personal Data.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            In this regard, the Company will retain your Personal Data for the
            period not exceeding 10 years, starting from the date your legal
            relations/transactions with the Company come to an end. However, the
            Company may retain your Personal Data for a longer period of such
            time prescribed if the laws permit or such retention of Personal
            Data is necessary for the establishment of the right of claim of the
            Company.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            After the period of time set forth above has expired, the Company
            will delete or destroy such Personal Data from the storage or system
            of the Company and other persons providing services to the Company
            (if any) or anonymize your Personal Data, unless in the event that
            the Company can continue to retain such Personal Data as prescribed
            by the Laws on Personal Data Protection or other applicable laws. In
            this regard, for additional details regarding the retention period
            of your Personal Data, you can contact the Company by using the
            contact details set out in Clause 9 of this Privacy Notice.
          </div>
          <div className='mt-8 mb-4 text-base font-bold'>
            8. Your Rights in relation to Personal Data
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            As the data subject, you have the following rights in relation to
            your Personal Data, subject to the rules, methods and conditions
            under the Laws on Personal Data Protection. In this regard, if you
            wish to make a request to exercise your rights, you can contact the
            Company by using the contact details set out in Clause 9 of this
            Privacy Notice.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            8.1 <span className='font-bold'>Right of Access</span> You have the
            right to access your Personal Data and may request that the Company
            provide you with a copy of such Personal Data in accordance with the
            requirements under the Laws on Personal Data Protection.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            8.2 <span className='font-bold'>Right to Data Portability</span> You
            have the right to obtain your Personal Data, including to request
            that your Personal Data is transmitted to another data controller or
            to you, except where it is technically unfeasible, in accordance
            with the requirements under the Laws on Personal Data Protection.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            8.3 <span className='font-bold'>Right to Object</span> You have the
            right to raise an objection to the Processing of your Personal Data
            in certain circumstances prescribed under the Laws on Personal Data
            Protection.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            8.4 <span className='font-bold'>Right to Erasure</span> You may
            request that the Company delete, destroy or anonymize your Personal
            Data in certain circumstances prescribed under the Laws on Personal
            Data Protection.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            8.5 <span className='font-bold'>Right to Restriction</span> You have
            the right to request that the Company restrict the Processing of
            your Personal Data in certain circumstances prescribed under the
            Laws on Personal Data Protection.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            8.6 <span className='font-bold'>Right to Rectification</span> You
            have the right to request that your Personal Data be rectified if
            the Personal Data is inaccurate, not up-to-date, incomplete, or may
            cause a misunderstanding.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            8.7 <span className='font-bold'>Right to Withdraw Consent</span> If
            the Company relies on your consent as the lawful basis for
            Processing your Personal Data, you have the right to withdraw such
            consent which has been provided to the Company at any time.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            8.8 <span className='font-bold'>Right to Lodge a Complaint</span> If
            you have any concerns or questions about any aspect of the Company’s
            practices in relation to your Personal Data, please contact the
            Company using the contact details set out in Clause 9 of this
            Privacy Notice. Where there is reason to believe that the Company is
            in breach of Laws on Personal Data Protection, you have the right to
            lodge a complaint to the expert committee appointed by the Personal
            Data Protection Committee in accordance with the rules and methods
            prescribed under the Laws on Personal Data Protection.
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            If you have any concerns or questions about any aspect of the
            Company’s practices in relation to your Personal Data, please
            contact the Company using the contact details set out in Clause 9 of
            this Privacy Notice. Where there is reason to believe that the
            Company is in breach of Laws on Personal Data Protection, you have
            the right to lodge a complaint to the expert committee appointed by
            the Personal Data Protection Committee in accordance with the rules
            and methods prescribed under the Laws on Personal Data Protection.
          </div>
          <div className='mt-8 mb-4 text-base font-bold'>
            9. How to Contact the Company
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            The Company has designated Charoen Pokphand Group Company Limited as
            the coordinator for matters relating to the Company’s Personal Data
            protection. If you have any questions or would like to exercise your
            rights as set out in this Privacy Notice, you may contact the
            Company using the contact information provided below:
          </div>
          <div className='grid grid-cols-[15%,85%]'>
            <div>E-mail:</div>
            <div>cpgroup_compliance@cp.co.th</div>
            <div>Address:</div>
            <div>
              {' '}
              Corporate Compliance Office, Charoen Pokphand Group Company
              Limited 1 Fortune Tower, 17th Floor, Ratchadaphisek Road, Din
              Daeng, Din Daeng, Bangkok 10400
            </div>
          </div>
          <div className='mt-8 mb-4 text-base font-bold'>
            10. Changes to This Privacy Policy
          </div>
          <div className='my-4 indent-7 font-normal leading-8'>
            The Company may make changes to this Privacy Policy from time to
            time to reflect any changes to our Processing of your Personal Data
            and to comply with any changes to the Laws on Personal Data
            Protection or any applicable laws. In this regard, the Company will
            notify you of any significant changes to the Privacy Policy and the
            amended Privacy Policy through appropriate means. The Company
            encourages you to review such communication in order to be aware of
            any changes made to this Privacy Policy from time to time.
          </div>
          <div className='my-4 font-normal leading-8 text-sm text-gray-500'>
            Document code: CPG-002-FM-CCO-PDPA-EN-01-20220531 This Privacy
            Policy shall be effective from 12 May 2021
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}

export default PrivacyPolicy
