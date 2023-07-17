import {PrismaClient} from '@prisma/client'
import {Enum} from '@alexandreannic/ts-utils'
import {BNRE} from '../generatedKoboInterface/BNRE/BNRE'
import {DbKoboFormHelper} from './Helper'

export class DbHelperBNRE {

  constructor(private prisma: PrismaClient) {
  }

  readonly assignMissingSettlement = async () => {
    const mapUuiSettlement = {
      'ae0c28ce-46f5-4fd9-88ee-9aaa145daee4': 'Chernihiv',
      '0b4db10e-b4f0-4275-ad27-ae9a886a9ff3': 'Chernihiv',
      'e2fc0c3d-7cab-4257-821b-4b1e6fc44800': 'Chernihiv',
      '11d57057-49de-44a0-98f9-ed094cd98e9a': 'Chernihiv',
      'b50a70d8-083c-4708-95c2-730189ff18fb': 'Chernihiv',
      '6a31f3fe-2c3b-4675-8cae-5ccbe06f0b8a': 'Chernihiv',
      'f8376b7e-7650-4467-9f3d-eefcd5bd3ac6': 'Chernihiv',
      '0d712415-5325-4b95-ab61-0b7e4e075b46': 'Chernihiv',
      '37cf0004-7f34-459f-b9ac-cdf8173982c0': 'Chernihiv',
      'd61f484f-8a1f-4837-ad45-48cc9ed516e5': 'Chernihiv',
      '1b23b286-b9e7-4db5-ac04-2c15e3421a10': 'Chernihiv',
      '80e606df-a8e9-43a0-b673-ac5536ec3c2c': 'Chernihiv',
      'ed1a800e-06d3-4c03-8d4b-1420ea5c9679': 'Chernihiv',
      'b3677d0a-8921-445f-8a1e-986f194ff67e': 'Chernihiv',
      'b227289d-798a-4640-b693-2daeeec4b03d': 'Chernihiv',
      '562745cb-137d-4b28-8f7b-56344a5aef4e': 'Chernihiv',
      'a5de0fde-210c-44bb-95f0-7b0877add60f': 'Chernihiv',
      '4684731f-d664-42e7-b533-297c1b8853f7': 'Chernihiv',
      '881845bd-4324-46cd-a770-740ce075a2d0': 'Chernihiv',
      '011ec1d1-0a09-4ae8-8e45-96958f8bf9ad': 'Chernihiv',
      '13a817f5-c55e-4ee2-a16c-362e3c699b14': 'Chernihiv',
      '01b528b1-681a-41cb-9879-6635ab2facea': 'Chernihiv',
      '82dea219-4f8b-4f6d-a67b-fce051e49025': 'Chernihiv',
      '636ba167-7862-4615-9e31-dce005ebf611': 'Chernihiv',
      'ca22f413-f060-4124-bde4-337d796dd0ff': 'Chernihiv',
      '9d10ddf5-4357-425a-acd1-7decbf3782d1': 'Chernihiv',
      '49b1b91d-5a91-4e1e-b2bc-287b37013481': 'Chernihiv',
      '76e6dafb-944e-4cac-ade6-38219b191105': 'Chernihiv',
      '58c67dfb-ca3b-4b41-b24a-1e4e91aca32d': 'Chernihiv',
      '4b5f1c7a-36e3-4a99-96a2-30046e40e2ce': 'Chernihiv',
      '25c3f056-4e2c-4376-a79d-c111f54a614f': 'Chernihiv',
      '922d20ab-751e-4c97-9321-2b27114375b3': 'Chernihiv',
      '9def2e66-a9d1-47ed-9953-f76b7abacad3': 'Chernihiv',
      'a6546aff-8157-4b53-a405-eea253d3a5c8': 'Chernihiv',
      '9cd62c94-4007-4066-ba0c-903ee9422cad': 'Chernihiv',
      '2850d538-b16f-46a6-87e7-4559d62e5004': 'Chernihiv',
      '5ca7e4a0-e9ad-43e0-97be-68e2d06a3b09': 'Zhadove',
      'e369c72a-e7a7-4e60-8d89-b10325d803c1': 'Zhadove',
      'ed191a2e-fc67-4333-8eb0-b23db1490d35': 'Zhadove',
      '515fac7b-384e-4082-ad9e-7177588cac2f': 'Zhadove',
      'd89c94bf-8a30-4dc8-97e7-9955d2a97d34': 'Zhadove',
      '88163942-1cfa-4e43-a4f4-5483575035b8': 'Zhadove',
      'a996c272-3eb7-429d-af36-6f58aed2386c': 'Zhadove',
      '7b1c01ff-4f13-45da-8797-0664e7f1346b': 'Zhadove',
      '67163b74-71d8-4eca-a966-e65be1a07e98': 'Zhadove',
      'bbacd6bd-6b7d-4f52-8599-cf1fc5a2a8b5': 'Zhadove',
      'abde791a-81d5-44b7-8f05-ac83606fd731': 'Zhadove',
      '29ccf081-b324-42bc-93b4-81097e59689c': 'Zhadove',
      '0aa5e238-f964-4330-812f-b5082efceea5': 'Zhadove',
      '3eedfea8-d521-47b3-982b-6c8b4585cbc7': 'Zhadove',
      '2247ec81-ae26-4af3-8cc5-3d0c06280c9d': 'Zhadove',
      '8f7048f7-b414-4c7b-a300-bcff3903cfa8': 'Zhadove',
      '4eee631a-e5a0-4a01-a918-ca70e5319e42': 'Zhadove',
      'b2283be1-14d3-4a7e-ae1c-bc460c8ec94f': 'Zhadove',
      '00dfea97-d2d2-4a8a-985e-d2b1b2806d2c': 'Zhadove',
      '52559f7a-0189-40db-8bc0-adf1d8bde256': 'Zhadove',
      '7188c79a-01b0-4523-900c-baa7f5444ca5': 'Zhadove',
      '9a3f9981-4e22-4077-a855-60e70dc5c571': 'Zhadove',
      'c3e3d82e-eddb-459a-983d-b8ca98ce0b47': 'Zhadove',
      '760bd1e6-2405-4936-a64a-8503a147e0d2': 'Zhadove',
      '98cc2e42-f3cd-4bdc-9bc5-50d60f2f779a': 'Zhadove',
      'bc559062-847b-4545-96f8-adf4a6ab3c46': 'Zhadove',
      'bc9ae844-84ca-43c7-8eb1-20f369bc417c': 'Zhadove',
      '14cd8c8c-0943-48d2-a340-07b73939b357': 'Zhadove',
      '5ba79e90-58d8-4bd1-b4b7-6f52f15abb76': 'Zhadove',
      'd36a92be-daf1-4cee-a461-7231bf293431': 'Zhadove',
      '6f9bb40d-1205-49a2-aae7-1c5c4bd21d3b': 'Zhadove',
      '8ced2f6c-f4d9-435a-b621-4587c693915b': 'Zhadove',
      '0bd1db0f-10c1-47b1-a5b6-125ec581efb0': 'Zhadove',
      '3e71ea2e-a639-4c44-b67f-5d1db2445e38': 'Zhadove',
      '3946e68c-e878-4c65-9d74-87114cf5450d': 'Zhadove',
      '0603c11e-7778-4c1f-b2be-5ff9aec26ec3': 'Zhadove',
      '2f4b815f-d35c-4e60-8b27-fce6ffccd4e5': 'Zhadove',
      '138a9fce-e98d-4858-9c47-ab50c8656bd8': 'Zhadove',
      '5b4d42c5-19e4-409e-9c36-c28eebba4373': 'Zhadove',
      '1d7ae8b0-85dc-4f97-98d5-b2ecfe93cc52': 'Zhadove',
      '8953ea3f-851c-4c85-9a68-8f298329d288': 'Zhadove',
      '1bf11bf7-b20e-472b-91f0-044783429b56': 'Zhadove',
      'e0d7cf82-8a52-4d2f-a54b-583b36a93747': 'Zhadove',
      '6f8759b2-42a2-415b-96b9-d57c7eaabeaf': 'Zhadove',
      'b3bec9f2-2cff-42b2-b28c-9e44647c90db': 'Zhadove',
      '134424cb-24c4-4c99-ad83-97bd3a7f4356': 'Zhadove',
      '467ede4f-3173-4d7b-a159-d38bd7b6a5e0': 'Zhadove',
      '13ae8d4e-8b65-4bb3-bc11-7cac64fc4c38': 'Zhadove',
      'f64cdb81-c192-4afa-a0d4-b519645ec43a': 'Zhadove',
      '9db6b0e5-a448-421d-bd06-9891c7dcdae6': 'Zhadove',
      '9bf38647-171e-4068-8491-c5bfe759cac5': 'Zhadove',
      '0cb894d5-b0e6-4642-a251-5af477c9d452': 'Zhadove',
      '7b240e81-ed13-4c9a-b2a1-3263b30c61ca': 'Zhadove',
      '55ab87c7-986c-4253-b519-89b040fc28a8': 'Horodnia',
      'b1c73447-70e0-457d-91ca-f4ce0f3ab612': 'Horodnia',
      '128b7190-e8c5-401d-b201-a369e1345f7d': 'Horodnia',
      '2cf9859f-d186-4760-843b-92aef07094ad': 'Horodnia',
      '31e6f8e3-2eec-4f06-a011-b1cf3d1b0ebd': 'Horodnia',
      '007e5fce-c2e7-4e8b-9e69-5d58dfb4d172': 'Chernihiv',
      '1b02e04a-0244-4a59-934b-aa29d000902a': 'Chernihiv',
      'de03bf7c-15e5-4ab4-a387-20a54d03604d': 'Chernihiv',
      'b137e8cd-28db-4e84-8288-deac2c5de8bf': 'Chernihiv',
      '1d5686a2-41e6-44a8-9188-38cae27b5b46': 'Chernihiv',
      'a36c57c8-05c2-4872-bb44-ef14ebfd916d': 'Chernihiv',
      'f2bdf008-bb2b-4acd-8b4c-79b491167919': 'Chernihiv',
      '5ec5d897-a00c-4dd0-bc00-27ca0a5805f4': 'Chernihiv',
      '41e1a811-f200-4f07-882f-2306126d9ae4': 'Chernihiv',
      'b1edf10c-0633-439f-9fbe-73af0b842752': 'Chernihiv',
      '716153b8-73e3-481b-bbf9-c797fa6c59d4': 'Chernihiv',
      'ae8cd264-76bc-4b01-bb08-c3f599aba5f8': 'Chernihiv',
      '6edcd502-c2f2-4dd9-bb02-e43191ce0f7c': 'Chernihiv',
      '6b2c5ebf-b74e-4b3b-8b21-eeed856ea8e6': 'Chernihiv',
      '255d9ee3-697c-49dd-b600-46b5a91a48a8': 'Chernihiv',
      '736927c4-408e-447e-8313-4f6ced090abf': 'Chernihiv',
      '14a51321-e466-473a-a509-d69a2ebe1a17': 'Chernihiv',
      '56c316b9-efc6-40ce-bf15-55e8067e5f29': 'Chernihiv',
      'd2fd5456-a5a8-429e-bacd-b0cd7558014e': 'Chernihiv',
      '51910fac-88db-4a7a-9318-2c4d9a9d59e9': 'Chernihiv',
      'c2495446-c99f-4e1a-9635-2a9592560083': 'Chernihiv',
      '1495406c-99c9-48f8-8d21-c44fb10f2ec2': 'Zhadove',
      '2d824ad9-fc57-4f43-99fb-49ab803e40d5': 'Zhadove',
      '78b0f539-8bd6-4af8-97d0-9db6bd5f623b': 'Zhadove',
      '20dab29e-328d-48c8-9b98-cd2ed726502a': 'Zhadove',
      'ba9501d0-e871-4e7b-8396-39d08042771b': 'Zhadove',
      'd14d6710-3078-46bb-979d-d7539352045c': 'Zhadove',
      '0fe1d046-701a-4c10-a02c-b9c74e863bee': 'Zhadove',
      'ce33652e-8e6c-49fe-ac84-4446d437304d': 'Zhadove',
      '0a6c9103-4342-4f94-8e23-8de76c42d66b': 'Zhadove',
      '1584faca-c768-4bfd-8afd-b45ca51f513c': 'Zhadove',
      '9990f21a-6a99-4bf9-8412-3b05d2e42145': 'Zhadove',
      '21e4ac35-00f8-4b03-8bce-5c166dc0a907': 'Zhadove',
      'bea71560-9a6c-4bbc-afa8-559472223240': 'Zhadove',
      'de358139-748b-4dea-8deb-8421c80ad878': 'Zhadove',
      '086cc693-01d9-4726-abb3-2acc0f0eaf5b': 'Zhadove',
      '92815150-47c5-4bf6-9cbc-748b13e223ef': 'Chernihiv',
      '1503dcb9-9f45-41b3-a094-d0df973c3879': 'Chernihiv',
      '635f86a3-3c36-4c4b-8990-a12f9780e37a': 'Chernihiv',
      '41073e6c-c81d-4467-b66c-d1b797968c7d': 'Chernihiv',
      'e0c9c74b-9715-40f2-bb8b-9cb112fd00f4': 'Chernihiv',
      'ca83bee7-a747-476a-8fef-e26e3204f8eb': 'Chernihiv',
      '3336910f-32cd-433c-9d5e-cde3018a66c0': 'Chernihiv',
      '873e1205-cf16-4e4d-9e13-08179c6fd4ca': 'Chernihiv',
      'ee330c97-1e3c-4a8a-beec-d4397ce95b80': 'Chernihiv',
      'ebdb3f34-7e81-4327-be67-5f574b1eb0e4': 'Chernihiv',
      '78525bcc-e746-4765-b409-0b21cb139aa7': 'Chernihiv',
      '5cc44b14-3f5b-4eae-a386-97569ec2c94c': 'Chernihiv',
      'e43d10fd-00f3-47b1-b45f-75d609cc7b29': 'Chernihiv',
      '1631d8ee-46ef-4506-b17c-717f2754d0ff': 'Chernihiv',
      'c03266a7-99b3-4449-897f-f9713223faa1': 'Chernihiv',
      '147b2a55-7845-4708-8156-d14a34b0f230': 'Chernihiv',
      '1808566b-3d5e-4f85-8523-d587ddd70e5a': 'Chernihiv',
      '8472e13c-bf40-4d18-ab02-65bc1f3dfbc7': 'Chernihiv',
      '4f6d9548-c888-4da3-a09a-f3571c1964f6': 'Chernihiv',
      '236badc5-66c4-4565-bc51-71bf88a4740d': 'Chernihiv',
      'd1f4a7de-b686-4199-b7c6-ff398a0bf6b0': 'Chernihiv',
      'f1afb2da-7d28-4a5d-8b53-07069d403e10': 'Chernihiv',
      'd8993f64-8b00-4a7e-9427-6b012203cbd0': 'Chernihiv',
      'ac9dc4ae-a9a7-41e3-900d-501129d95da9': 'Chernihiv',
      '66827f82-0c8b-4773-b03e-0f117137fa5c': 'Chernihiv',
      '3237920f-8f8c-452e-8a4a-bbb4931e82c1': 'Chernihiv',
      '8e393bec-c916-46f3-8e75-ed477ee8ac6a': 'Chernihiv',
      '8a7a1b76-b3bf-4c87-b725-7bd2dad9212c': 'Chernihiv',
      '8f6c95e8-6bf5-4507-8c34-a5759549960a': 'Chernihiv',
      'a150eb3a-65e4-4952-9177-49210e45b2e1': 'Chernihiv',
      '04145716-3fd3-4bff-9f73-b0e05c5df4aa': 'Chernihiv',
      'fbb43ffd-2c74-4a83-b99f-f36295b3cc15': 'Chernihiv',
      '59bbbcf4-d5f3-4395-8d3c-2c93e2c18a1a': 'Chernihiv',
      'b157de2a-2de9-4599-bfcd-96842a2d5836': 'Chernihiv',
      'ae976e75-12a0-428b-ac80-4f215866046b': 'Chernihiv',
      'e59168e6-ba09-43eb-8b75-58bb7a5b99f9': 'Chernihiv',
      '3159ba3c-ee11-416e-aade-e626769bae81': 'Chernihiv',
      'bc5cf502-eaee-47b4-b7a1-64b9257f3c62': 'Chernihiv',
      'd9850a65-7aa0-4c1a-8833-601ef2b1da46': 'Chernihiv',
      'dd32c31b-7d89-44d1-9d18-b1b7253688bd': 'Chernihiv',
      'f413820f-9a23-402e-b223-eb2d2b950e9c': 'Chernihiv',
      '0c5563d7-3948-409e-a9bb-1a89892a0e51': 'Chernihiv',
      '3f2b5f6a-d951-44ad-8f54-c923d8ed4748': 'Chernihiv',
      '98161b42-4f6a-4261-9609-f600c17ccecf': 'Chernihiv',
      '24567b28-36c9-47fe-acca-7751643222ee': 'Chernihiv',
      '760b24cf-3d2d-40c0-bf1d-37252666b775': 'Chernihiv',
      '823df543-a818-4b52-ad53-f17722b1669c': 'Chernihiv',
      'df8bc178-1a65-490a-a8e1-bd8077fcfe08': 'Chernihiv',
      '8a6eabc7-c766-4f1d-95ab-3a4212b89540': 'Chernihiv',
      'ff7b54d9-2d13-4415-9c15-105157a71901': 'Chernihiv',
      '268bd7bd-ca46-4947-a385-87d731787ad6': 'Chernihiv',
      'e294e3b0-ce46-4eac-8e54-16f4e1992cb6': 'Chernihiv',
      '6ff525b3-947c-4367-a7f8-bebc06c56d87': 'Chernihiv',
      'fecb2756-d07e-4e56-a215-6ee3c475a905': 'Chernihiv',
      '6d302d7e-403d-4dc2-939a-76d79e5295bf': 'Chernihiv',
      'ad56b45f-1bc0-420f-9f9a-207072b3ca82': 'Chernihiv',
      '8483ffb1-fef9-42bd-bc63-5269e934feff': 'Chernihiv',
      '83476837-9c3c-4b14-a477-325795295708': 'Chernihiv',
      '2652abd4-6310-4428-b1ba-136da00080e8': 'Chernihiv',
      'eafc54ef-b141-48cc-b6db-498a8d0b1d59': 'Chernihiv',
      '630569cd-b14d-4046-9ad7-704661c12726': 'Chernihiv',
      'd870ab63-ab61-41d4-b79a-74db75d53902': 'Chernihiv',
      'c6b5ffca-2be5-41ce-b8ca-6200a4b7aea0': 'Chernihiv',
      '8b6e54f6-66e3-4535-8747-49014274abba': 'Chernihiv',
      'c2e3aed9-6ec2-4101-8ede-17a77e27af29': 'Zhadove',
      '9a1b37d0-25cc-4a47-a17f-f7aff7cbc21d': 'Zhadove',
      'ee416510-8ee9-475e-947d-db66e0b469fa': 'Zhadove',
      'e02661dd-0009-4327-8a93-f0256a7a7abf': 'Zhadove',
      'd4ad323a-83e3-4f97-a2b6-bc4c3091be58': 'Zhadove',
      '5bab9bf5-3eed-4435-a5c2-0407335468f2': 'Zhadove',
      '01ba1372-6889-48fd-961c-20609e5664e3': 'Zhadove',
      'c4fe6436-5f1a-4858-9a2a-21fa6fd25531': 'Zhadove',
      '55d199cf-0213-4409-818c-376484806ae3': 'Zhadove',
      'ba4c4df7-5130-401e-9478-e454a131b2eb': 'Zhadove',
      '71aa5fc5-b19b-477c-82e4-5db3ec5a7dd9': 'Zhadove',
      '68322450-4cdf-4de4-89d2-b5133156785d': 'Zhadove',
      '7cd04d82-debd-4e6b-8109-b1ccee06c245': 'Zhadove',
      'a0f80ae3-5e79-4e13-a61c-14e2fbbce8d6': 'Zhadove',
      '636dc394-78af-427e-a6be-8b93dcff4a5a': 'Zhadove',
      '830d013f-5182-4a7c-87e3-9738998f847d': 'Zhadove',
      '53f5f0ea-6ad5-423a-bac2-ab4540018970': 'Zhadove',
      '0b9b4a01-b0fd-4d73-8522-7d9acde74d80': 'Zhadove',
      '4ca2e73b-c6c8-40a5-9ba1-24ca0d6e50d5': 'Zhadove',
      '941eede4-4974-48d8-8d2d-015a823426fd': 'Zhadove',
      'd699a6cf-b6b0-4d57-a413-a7353ae151d1': 'Zhadove',
      '898b8efe-d4e9-4daa-9576-5e9fbef24ef7': 'Zhadove',
      '2237ee53-f07f-49a2-a073-06220a231646': 'Zhadove',
      '4bd1f984-8b19-4841-a230-4d940c4903ed': 'Snovsk',
      'e8645ac5-2af1-4db7-922f-73c485a50646': 'Snovsk',
      '42480699-7df4-4630-9d6a-49b11be8e20f': 'Snovsk',
      'a4425208-9cdc-4c9c-aecb-c9d001af64f5': 'Lykhivka',
      '4bf9d946-1b64-4a20-82a2-f46f25774c0b': 'Lykhivka',
      'ca99c556-0c8c-48db-a9ac-b36e744e433c': 'Lykhivka',
      'de8f628b-4581-491c-9888-dddc17536318': 'Lykhivka',
      'e92ec08e-9b8e-4cb7-bc47-d9d591197afc': 'Lykhivka',
      'a66a87b4-becb-4bbb-9bed-de948e678bf5': 'Lykhivka',
      'b4241f3f-274a-4de0-8a39-38d531008f19': 'Lykhivka',
      '05819355-d0a4-41e1-bcf0-51aa1e1cb54e': 'Lykhivka',
      '1c6cdb24-1a76-483b-88f4-717b9d33006f': 'Lykhivka',
      'e9a82fa9-ed77-4505-b8db-5416d42a04cd': 'Lykhivka',
      '794f9849-a8b6-4776-ae22-233659d1baf1': 'Lykhivka',
      '9b3548d3-92da-4c1b-aa55-90b99243daa5': 'Lykhivka',
      '0b8b36f4-7a85-47db-a0a2-69df93f60e45': 'Lykhivka',
      '09c99ab3-dc90-4907-87d0-30aedf4bc549': 'Lykhivka',
      '196938aa-dd92-45b0-9af8-f82fc7151dfc': 'Lykhivka',
      '497f2ac5-de0a-4a4a-a9c9-2f5a98e4dbb9': 'Lykhivka',
      'a3fd2a99-0fc1-44a5-b953-80aed09adbd8': 'Lykhivka',
      'd65b9da9-0de8-4544-85ef-05734d06c90f': 'Lykhivka',
      'eb971b8f-5702-484d-b31f-1a4657597124': 'Lykhivka',
      'ac48112c-2245-4590-bda4-e2814935c90e': 'Lykhivka',
      'f32844da-5876-4321-905b-15ce60f7e7ca': 'Lykhivka',
      'e6145108-9a80-463b-a606-d17f6f12d9a3': 'Lykhivka',
      '22391b72-4249-4f94-abe6-e2fabd45029c': 'Lykhivka',
      'afbc85f8-1553-42c7-9e84-fdcfb991ba79': 'Lykhivka',
      '2a1d62c5-9947-491c-9cfe-a080e76a46fa': 'Lykhivka',
      'c573091c-1ecc-4ca9-a084-96624900a414': 'Lykhivka',
      '1c5ea953-10fc-42c1-a589-a7efa37ddc4e': 'Lykhivka',
      'ea44da69-d9c1-4147-ac60-3ef4214b92ce': 'Lykhivka',
      '044864bb-bac4-4c41-9d42-5dee272a3930': 'Lykhivka',
      '6f680dbe-7118-4363-99b3-a9890f5bc8c3': 'Lykhivka',
      'e7651ec8-0289-4d7e-8fe9-e64ff1c4d0f2': 'Lykhivka',
      'd2b60ffd-bce3-4b28-b1dc-f793dcff8589': 'Lykhivka',
      'c04bcb75-86ac-43e1-8789-ddada0e0ec14': 'Lykhivka',
      '67048641-0a6e-4e8b-b394-4b30b0834678': 'Lykhivka',
      'bedd7d9d-a4a4-477a-9183-9010cbc473a2': 'Lykhivka',
      'f2e90b91-5158-42e1-923a-51d70b9ed2d8': 'Chernihiv',
      '97b9acbf-8198-43c4-bd71-6ad9d019271a': 'Chernihiv',
      '1f1dfb90-289e-4a87-ad00-c09328f73b57': 'Chernihiv',
      '87ccf2c9-4d93-4584-8ff7-1d8ba1d9a6a4': 'Chernihiv',
      'cf121bfa-c593-4f25-8591-b0ad9c377656': 'Chernihiv',
      '0059fcb6-7d25-4d5a-b7bf-a8faeb5f0512': 'Chernihiv',
      '2cd06f61-5c39-4fe8-8327-b48762028925': 'Chernihiv',
      '9eb88d2a-86ee-491c-a7e6-906cbeeec4df': 'Chernihiv',
      'e0c24c4d-0635-44b4-ab3d-b0bd7e193990': 'Chernihiv',
      'c0f3b455-6292-42a5-90b8-ca1fae8ade86': 'Chernihiv',
      '624f8084-792f-402c-8c47-488141a340ee': 'Chernihiv',
      'df5acab6-8786-4c94-beb0-ab330cd3bc99': 'Chernihiv',
      'b1987482-a09a-47ed-94b8-cbf6696ca416': 'Chernihiv',
      '715e01ec-1e78-4cc8-8def-dd85b5669183': 'Chernihiv',
      '8c258d2c-7e75-44c9-8c4a-e0fa115c623d': 'Apostolove',
      '492703f8-34c9-442f-ac83-78570f182b86': 'Apostolove',
    }
    const entries = await this.prisma.koboAnswers.findMany({where: {uuid: {in: Enum.keys(mapUuiSettlement)}}}).then(_ => _.map(DbKoboFormHelper.definedJsonType<BNRE>()))
    await Promise.all(entries.map(e => {
      e.answers.ben_det_settlement = mapUuiSettlement[e.uuid]?.toLowerCase()
      return this.prisma.koboAnswers.update({
        where: {uuid: e.uuid},
        data: {answers: {...e.answers as any}}
      })
    }))
  }
}