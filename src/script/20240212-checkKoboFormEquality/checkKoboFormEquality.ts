import {koboFormsId} from '../../core/conf/KoboFormsId'
import {KoboSdkGenerator} from '../../feature/kobo/KoboSdkGenerator'
import {PrismaClient} from '@prisma/client'
import {scriptConf} from '../ScriptConf'
import {KoboId} from '../../feature/connector/kobo/KoboClient/type/KoboAnswer'
import assert from 'assert'

(async () => {
  const config = {
    importConcurrency: 200,
    formId: koboFormsId.prod.protection_Hhs2_1,
    newFormId: koboFormsId.prod.protection_hhs3,
    linkId: (answerB: any) => {
      return '' + answerB.prev_id
    }
  }

  const prisma = new PrismaClient()
  const sdk = await new KoboSdkGenerator(prisma).get(scriptConf.kobo.prod.serverId)
  const [answersA, answersB] = await Promise.all([
    sdk.getAnswers(config.formId).then(_ => _.data),
    sdk.getAnswers(config.newFormId).then(_ => _.data),
  ])
  const answersBIndex = answersB.reduce((m, curr) => {
    m.set(config.linkId(curr.answers), curr.answers)
    return m
  }, new Map<KoboId, any>())
  answersA.map(_ => _).forEach(_ => {
    const a = _.answers
    const b = answersBIndex.get(_.id)
    const checkP = (aKey: string, bKey = aKey) => {
      const isOk =
        // new Date(a[aKey])
        // ? new Date(a[aKey]).toISOString() === new Date(b[bKey]).toISOString()
        // :
        a[aKey]?.replaceAll(/\s/g, ' ') === b[bKey]?.replaceAll(/\s/g, ' ')
      if (!isOk) {
        console.log('===')
        console.log(`${aKey} ! ${bKey}`)
        console.log(a[aKey]?.replaceAll(/\s/g, ' '))
        console.log(b[bKey]?.replaceAll(/\s/g, ' '))
      }
    }

    checkP('staff_to_insert_their_DRC_office')
    checkP('staff_code')
    checkP('type_of_site')
    checkP('present_yourself')
    checkP('thanks_the_respondant')
    checkP('have_you_filled_out_this_form_before')
    checkP('have_you_filled_out_this_form_before_yes')
    checkP('where_are_you_current_living_label')
    checkP('where_are_you_current_living_oblast')
    checkP('where_are_you_current_living_raion')
    checkP('where_are_you_current_living_hromada')
    checkP('settlement')
    checkP('what_is_your_citizenship')
    checkP('if_nonukrainian_what_is_your_citizenship')
    checkP('please_specifyif_nonukrainian_what_is_your_citizenship')
    checkP('if_ukrainian_do_you_or_your_household_members_identify_as_member_of_a_minority_group')
    checkP('please_specifyif_ukrainian_do_you_or_your_household_members_identify_as_member_of_a_minority_group')
    checkP('what_is_the_primary_language_spoken_in_your_household')
    checkP('what_is_the_type_of_your_household')
    checkP('what_is_the_type_of_your_household_min')
    checkP('what_is_the_type_of_your_household_max')
    checkP('how_many_ind', 'ben_det_hh_size')
    checkP('calc_hh_char_hh_det_disability')
    checkP('are_you_separated_from_any_of_your_households_members')
    checkP('where_is_your_partner')
    checkP('please_specifywhere_is_your_partner')
    checkP('where_is_your_partner_remain_behind_in_the_area_of_origin')
    checkP('please_specifywhere_is_your_partner_remain_behind_in_the_area_of_origin')
    checkP('where_is_your_child_lt_18')
    checkP('please_specifywhere_is_your_child_lt_18')
    checkP('where_is_your_child_lt_18_remain_behind_in_the_area_of_origin')
    checkP('please_specifywhere_is_your_child_lt_18_remain_behind_in_the_area_of_origin')
    checkP('where_is_your_child_gte_18')
    checkP('please_specifywhere_is_your_child_gte_18')
    checkP('where_is_your_child_gte_18_remain_behind_in_the_area_of_origin')
    checkP('please_specifywhere_is_your_child_gte_18_remain_behind_in_the_area_of_origin')
    checkP('where_is_your_mother')
    checkP('please_specifywhere_is_your_mother')
    checkP('where_is_your_mother_remain_behind_in_the_area_of_origin')
    checkP('please_specifywhere_is_your_mother_remain_behind_in_the_area_of_origin')
    checkP('where_is_your_father')
    checkP('please_specifywhere_is_your_father')
    checkP('where_is_your_father_remain_behind_in_the_area_of_origin')
    checkP('please_specifywhere_is_your_father_remain_behind_in_the_area_of_origin')
    checkP('where_is_your_caregiver')
    checkP('please_specifywhere_is_your_caregiver')
    checkP('where_is_your_caregiver_remain_behind_in_the_area_of_origin')
    checkP('please_specifywhere_is_your_caregiver_remain_behind_in_the_area_of_origin')
    checkP('where_is_your_other_relative')
    checkP('please_specifywhere_is_your_other_relative')
    checkP('where_is_your_other_relative_remain_behind_in_the_area_of_origin')
    checkP('please_specifywhere_is_your_other_relative_remain_behind_in_the_area_of_origin')
    checkP('do_any_of_these_specific_needs_categories_apply_to_the_head_of_this_household')
    checkP('please_specifydo_any_of_these_specific_needs_categories_apply_to_the_head_of_this_household')
    checkP('do_you_have_a_household_member_that_has_a_lot_of_difficulty')
    checkP('how_many_children_have_one_or_more_of_the_functional_limitations')
    checkP('how_many_adults_members_have_one_or_more_of_the_functional_limitations')
    checkP('do_you_or_anyone_in_your_household_have_a_disability_status_from_the_gov')
    checkP('why_dont_they_have_status')
    checkP('please_specifywhy_dont_they_have_status')
    checkP('do_you_or_anyone_in_your_household_receive_state_allowance_for_disability')
    checkP('does_the_household_host_children_who_are_relatives')
    checkP('does_the_household_host_children_who_are_not_relatives')
    checkP('do_you_identify_as_any_of_the_following')
    checkP('are_you')
    checkP('what_is_your_area_of_origin_label')
    checkP('what_is_your_area_of_origin_oblast')
    checkP('what_is_your_area_of_origin_raion')
    checkP('what_is_your_area_of_origin_hromada')
    checkP('why_did_you_leave_your_area_of_origin')
    checkP('please_specifywhy_did_you_leave_your_area_of_origin')
    // checkP('when_did_you_leave_your_area_of_origin')
    checkP('how_did_you_travel_to_your_displacement_location')
    checkP('please_specifyhow_did_you_travel_to_your_displacement_location')
    // checkP('when_did_you_first_leave_your_area_of_origin')
    // checkP('when_did_you_return_to_your_area_of_origin')
    checkP('why_did_you_decide_to_return_to_your_area_of_origin')
    checkP('please_specifywhy_did_you_decide_to_return_to_your_area_of_origin')
    checkP('have_you_received_any_form_of_compensation_for_leaving_your_area_of_origin')
    checkP('have_you_received_any_form_of_compensation_for_returnee_your_area_of_origin')
    checkP('was_your_movement_to_return_to_your_area_of_origin_supported_or_facilitated_by_any_of_the_following')
    checkP('please_specifywas_your_movement_to_return_to_your_area_of_origin_supported_or_facilitated_by_any_of_the_following')
    checkP('did_you_or_any_member_of_your_household_on_your_displacement_journey_experience_safety_or_security_concerns')
    checkP('please_specifydid_you_or_any_member_of_your_household_on_your_displacement_journey_experience_safety_or_security_concerns')
    checkP('have_you_been_displaced_prior_to_your_current_displacement')
    checkP('get_status')
    checkP('what_are_your_households_intentions_in_terms_of_place_of_residence')
    checkP('what_factors_would_be_key_to_support_your_successful_integration_into_the_local_community')
    checkP('please_specifywhat_factors_would_be_key_to_support_your_successful_integration_into_the_local_community')
    checkP('what_would_be_the_deciding_factor_in_your_return_to_your_area_of_origin')
    checkP('why_are_planning_to_relocate_from_your_current_place_of_residence')
    checkP('please_specifywhy_are_planning_to_relocate_from_your_current_place_of_residence')
    checkP('as_nonUkrainian_do_you_have_documentation')
    checkP('as_stateless_person_household_do_you_have_a_stateless_registration_certificate')
    checkP('are_you_and_your_hh_members_registered_as_idps')
    checkP('do_you_have_any_of_the_following')
    checkP('do_you_and_your_hh_members_receive_the_idp_allowance')
    checkP('why_they_do_not_receive')
    checkP('please_specifywhy_they_do_not_receive')
    checkP('why_are_you_not_registered')
    checkP('please_specifywhy_are_you_not_registered')
    checkP('why_not_registered')
    checkP('please_specifywhy_not_registered')
    checkP('what_housing_land_and_property_documents_do_you_lack')
    checkP('please_specifywhat_housing_land_and_property_documents_do_you_lack')
    checkP('have_you_experienced_any_barriers_in_obtaining_or_accessing_identity_documentation_and_or_hlp_documentation')
    checkP('please_specifyhave_you_experienced_any_barriers_in_obtaining_or_accessing_identity_documentation_and_or_hlp_documentation')
    checkP('please_rate_your_sense_of_safety_in_this_location')
    checkP('what_are_the_main_factors_that_make_this_location_feel_unsafe')
    checkP('please_specifywhat_are_the_main_factors_that_make_this_location_feel_unsafe')
    checkP('how_would_you_describe_the_relationship_between_member_of_the_host_community')
    checkP('what_factors_are_affecting_the_relationship_between_communities_in_this_location')
    checkP('please_specifywhat_factors_are_affecting_the_relationship_between_communities_in_this_location')
    checkP('have_you_or_your_household_members_experienced_incidents_with_host_community_members_idps_returnees')
    checkP('please_specifyhave_you_or_your_household_members_experienced_incidents_with_host_community_members_idps_returnees')
    checkP('do_you_or_your_household_members_experience_any_barriers_to_movements_in_and_around_the_area')
    checkP('please_specifydo_you_or_your_household_members_experience_any_barriers_to_movements_in_and_around_the_area')
    checkP('get_tag_if_is_displaced')
    checkP('has_any_adult_male_member_experienced_violence')
    checkP('what_type_of_incidents_took_place_has_any_adult_male_member_experienced_violence')
    checkP('please_specifywhat_type_of_incidents_took_place_has_any_adult_male_member_experienced_violence')
    checkP('when_did_the_incidents_occur_has_any_adult_male_member_experienced_violence')
    checkP('who_were_the_perpetrators_of_the_incident_has_any_adult_male_member_experienced_violence')
    checkP('please_specifywho_were_the_perpetrators_of_the_incident_has_any_adult_male_member_experienced_violence')
    checkP('has_any_adult_female_member_experienced_violence')
    checkP('what_type_of_incidents_took_place_has_any_adult_female_member_experienced_violence')
    checkP('please_specifywhat_type_of_incidents_took_place_has_any_adult_female_member_experienced_violence')
    checkP('when_did_the_incidents_occur_has_any_adult_female_member_experienced_violence')
    checkP('who_were_the_perpetrators_of_the_incident_has_any_adult_female_member_experienced_violence')
    checkP('please_specifywho_were_the_perpetrators_of_the_incident_has_any_adult_female_member_experienced_violence')
    checkP('has_any_boy_member_experienced_violence')
    checkP('what_type_of_incidents_took_place_has_any_boy_member_experienced_violence')
    checkP('please_specifywhat_type_of_incidents_took_place_has_any_boy_member_experienced_violence')
    checkP('when_did_the_incidents_occur_has_any_boy_member_experienced_violence')
    checkP('who_were_the_perpetrators_of_the_incident_has_any_boy_member_experienced_violence')
    checkP('please_specifywho_were_the_perpetrators_of_the_incident_has_any_boy_member_experienced_violence')
    checkP('has_any_girl_member_experienced_violence')
    checkP('what_type_of_incidents_took_place_has_any_girl_member_experienced_violence')
    checkP('please_specifywhat_type_of_incidents_took_place_has_any_girl_member_experienced_violence')
    checkP('when_did_the_incidents_occur_has_any_girl_member_experienced_violence')
    checkP('who_were_the_perpetrators_of_the_incident_has_any_girl_member_experienced_violence')
    checkP('please_specifywho_were_the_perpetrators_of_the_incident_has_any_girl_member_experienced_violence')
    checkP('has_any_other_member_experienced_violence')
    checkP('what_type_of_incidents_took_place_has_any_other_member_experienced_violence')
    checkP('please_specifywhat_type_of_incidents_took_place_has_any_other_member_experienced_violence')
    checkP('when_did_the_incidents_occur_has_any_other_member_experienced_violence')
    checkP('who_were_the_perpetrators_of_the_incident_has_any_other_member_experienced_violence')
    checkP('please_specifywho_were_the_perpetrators_of_the_incident_has_any_other_member_experienced_violence')
    checkP('do_you_or_members_of_your_household_experience_discrimination_or_stigmatization_in_your_current_area_of_residence')
    checkP('on_what_ground')
    checkP('please_specifyon_what_ground')
    checkP('is_are_any_adult_memberof_your_household_displaying_any_of_the_following_signs')
    checkP('please_specifyis_are_any_adult_memberof_your_household_displaying_any_of_the_following_signs')
    checkP('is_are_any_child_member_of_your_household_displaying_any_of_the_following_signs')
    checkP('please_specifyis_are_any_child_member_of_your_household_displaying_any_of_the_following_signs')
    checkP('do_household_members_experiencing_distress_have_access_to_relevant_care_and_services')
    checkP('what_are_the_barriers_to_access_services')
    checkP('please_specifywhat_are_the_barriers_to_access_services')
    checkP('what_do_you_think_feel_are_the_major_stress_factors_for_you_and_your_household_members')
    checkP('please_specifywhat_do_you_think_feel_are_the_major_stress_factors_for_you_and_your_household_members')
    checkP('what_are_the_main_sources_of_income_of_your_household')
    checkP('please_specifywhat_are_the_main_sources_of_income_of_your_household')
    checkP('what_type_of_allowances_do_you_receive')
    checkP('please_specifywhat_type_of_allowances_do_you_receive')
    checkP('what_is_the_average_month_income_per_household')
    checkP('including_yourself_are_there_members_of_your_household_who_are_out_of_work_and_seeking_employment')
    checkP('what_are_the_reasons_for_being_out_of_work')
    checkP('please_specifywhat_are_the_reasons_for_being_out_of_work')
    checkP('are_there_gaps_in_meeting_your_basic_needs')
    checkP('what_are_the_strategies_that_your_household_uses_to_cope_with_these_challenges')
    checkP('please_specifywhat_are_the_strategies_that_your_household_uses_to_cope_with_these_challenges')
    checkP('are_schoolaged_children_in_your_household_regularly_attending_primary_or_secondary_education')
    checkP('is_it')
    checkP('what_are_the_reasons_preventing_children_in_your_household_from_regularly_attending_education_services')
    checkP('please_specifywhat_are_the_reasons_preventing_children_in_your_household_from_regularly_attending_education_services')
    checkP('what_is_your_current_housing_structure')
    checkP('what_is_the_tenure_status_of_your_accommodation_private')
    checkP('please_specifywhat_is_the_tenure_status_of_your_accommodation_private')
    checkP('what_is_the_tenure_status_of_your_accommodation_public')
    checkP('please_specifywhat_is_the_tenure_status_of_your_accommodation_public')
    checkP('do_you_have_formal_rental_documents_to_stay_in_your_accommodation')
    checkP('what_is_the_general_condition_of_your_accommodation')
    checkP('what_are_your_main_concerns_regarding_your_accommodation')
    checkP('do_you_have_access_to_health_care_in_your_current_location')
    checkP('what_are_the_barriers_to_accessing_health_services')
    checkP('please_specifywhat_are_the_barriers_to_accessing_health_services')
    checkP('what_is_your_1_priority')
    checkP('please_specifywhat_is_your_1_priority')
    checkP('what_is_your_2_priority')
    checkP('please_specifywhat_is_your_2_priority')
    checkP('what_is_your_3_priority')
    checkP('please_specifywhat_is_your_3_priority')
    checkP('thanks')
    // checkP('additional_information_shared_by_respondent')
    // checkP('comments_observations_of_the_protection_monitor')
    checkP('need_for_assistance')
  })
})()