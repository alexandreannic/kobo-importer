import {ProtHHS_2_1Options} from './ProtHHS_2_1Options'

type Opt<T extends keyof typeof ProtHHS_2_1Options> = keyof (typeof ProtHHS_2_1Options)[T]

export interface ProtHHS_2_1 {
start: string | undefined,
	end: string | undefined,
	deviceid: string | undefined,
	staff_to_insert_their_DRC_office: Opt<'staff_to_insert_their_DRC_office'> | undefined,
	staff_code: Opt<'staff_code'> | undefined,
	type_of_site: Opt<'type_of_site'> | undefined,
	present_yourself: Opt<'present_yourself'> | undefined,
	have_you_filled_out_this_form_before: Opt<'have_you_filled_out_this_form_before'> | undefined,
	where_are_you_current_living_oblast: Opt<'what_is_your_area_of_origin_oblast'> | undefined,
	where_are_you_current_living_raion: Opt<'what_is_your_area_of_origin_raion'> | undefined,
	where_are_you_current_living_hromada: Opt<'what_is_your_area_of_origin_hromada'> | undefined,
	settlement: string | undefined,
	what_is_your_citizenship: Opt<'what_is_your_citizenship'> | undefined,
	if_nonukrainian_what_is_your_citizenship: Opt<'if_nonukrainian_what_is_your_citizenship'> | undefined,
	please_specifyif_nonukrainian_what_is_your_citizenship: string | undefined,
	if_ukrainian_do_you_or_your_household_members_identify_as_member_of_a_minority_group: Opt<'if_ukrainian_do_you_or_your_household_members_identify_as_member_of_a_minority_group'> | undefined,
	please_specifyif_ukrainian_do_you_or_your_household_members_identify_as_member_of_a_minority_group: string | undefined,
	what_is_the_primary_language_spoken_in_your_household: Opt<'what_is_the_primary_language_spoken_in_your_household'> | undefined,
	what_is_the_type_of_your_household: Opt<'what_is_the_type_of_your_household'> | undefined,
	how_many_ind: number | undefined,
	hh_sex_1: Opt<'hh_sex_1'> | undefined,
	hh_age_1: number | undefined,
	hh_sex_2: Opt<'hh_sex_2'> | undefined,
	hh_age_2: number | undefined,
	hh_sex_3: Opt<'hh_sex_3'> | undefined,
	hh_age_3: number | undefined,
	hh_sex_4: Opt<'hh_sex_4'> | undefined,
	hh_age_4: number | undefined,
	hh_sex_5: Opt<'hh_sex_5'> | undefined,
	hh_age_5: number | undefined,
	hh_sex_6: Opt<'hh_sex_6'> | undefined,
	hh_age_6: number | undefined,
	hh_sex_7: Opt<'hh_sex_7'> | undefined,
	hh_age_7: number | undefined,
	hh_sex_8: Opt<'hh_sex_8'> | undefined,
	hh_age_8: number | undefined,
	hh_sex_9: Opt<'hh_sex_9'> | undefined,
	hh_age_9: number | undefined,
	hh_sex_10: Opt<'hh_sex_10'> | undefined,
	hh_age_10: number | undefined,
	hh_sex_11: Opt<'hh_sex_11'> | undefined,
	hh_age_11: number | undefined,
	hh_sex_12: Opt<'hh_sex_12'> | undefined,
	hh_age_12: number | undefined,
	are_you_separated_from_any_of_your_households_members: Opt<'are_you_separated_from_any_of_your_households_members'> | undefined,
	where_is_your_partner: Opt<'where_is_your_partner'> | undefined,
	please_specifywhere_is_your_partner: string | undefined,
	where_is_your_partner_remain_behind_in_the_area_of_origin: Opt<'where_is_your_partner_remain_behind_in_the_area_of_origin'> | undefined,
	please_specifywhere_is_your_partner_remain_behind_in_the_area_of_origin: string | undefined,
	where_is_your_child_lt_18: Opt<'where_is_your_child_lt_18'> | undefined,
	please_specifywhere_is_your_child_lt_18: string | undefined,
	where_is_your_child_lt_18_remain_behind_in_the_area_of_origin: Opt<'where_is_your_child_lt_18_remain_behind_in_the_area_of_origin'> | undefined,
	please_specifywhere_is_your_child_lt_18_remain_behind_in_the_area_of_origin: string | undefined,
	where_is_your_child_gte_18: Opt<'where_is_your_child_gte_18'> | undefined,
	please_specifywhere_is_your_child_gte_18: string | undefined,
	where_is_your_child_gte_18_remain_behind_in_the_area_of_origin: Opt<'where_is_your_child_gte_18_remain_behind_in_the_area_of_origin'> | undefined,
	please_specifywhere_is_your_child_gte_18_remain_behind_in_the_area_of_origin: string | undefined,
	where_is_your_mother: Opt<'where_is_your_mother'> | undefined,
	please_specifywhere_is_your_mother: string | undefined,
	where_is_your_mother_remain_behind_in_the_area_of_origin: Opt<'where_is_your_mother_remain_behind_in_the_area_of_origin'> | undefined,
	please_specifywhere_is_your_mother_remain_behind_in_the_area_of_origin: string | undefined,
	where_is_your_father: Opt<'where_is_your_father'> | undefined,
	please_specifywhere_is_your_father: string | undefined,
	where_is_your_father_remain_behind_in_the_area_of_origin: Opt<'where_is_your_father_remain_behind_in_the_area_of_origin'> | undefined,
	please_specifywhere_is_your_father_remain_behind_in_the_area_of_origin: string | undefined,
	where_is_your_caregiver: Opt<'where_is_your_caregiver'> | undefined,
	please_specifywhere_is_your_caregiver: string | undefined,
	where_is_your_caregiver_remain_behind_in_the_area_of_origin: Opt<'where_is_your_caregiver_remain_behind_in_the_area_of_origin'> | undefined,
	please_specifywhere_is_your_caregiver_remain_behind_in_the_area_of_origin: string | undefined,
	where_is_your_other_relative: Opt<'where_is_your_other_relative'> | undefined,
	please_specifywhere_is_your_other_relative: string | undefined,
	where_is_your_other_relative_remain_behind_in_the_area_of_origin: Opt<'where_is_your_other_relative_remain_behind_in_the_area_of_origin'> | undefined,
	please_specifywhere_is_your_other_relative_remain_behind_in_the_area_of_origin: string | undefined,
	do_any_of_these_specific_needs_categories_apply_to_the_head_of_this_household: Opt<'do_any_of_these_specific_needs_categories_apply_to_the_head_of_this_household'> | undefined,
	please_specifydo_any_of_these_specific_needs_categories_apply_to_the_head_of_this_household: string | undefined,
	do_you_have_a_household_member_that_has_a_lot_of_difficulty: Opt<'do_you_have_a_household_member_that_has_a_lot_of_difficulty'> | undefined,
	how_many_children_have_one_or_more_of_the_functional_limitations: number | undefined,
	how_many_adults_members_have_one_or_more_of_the_functional_limitations: number | undefined,
	do_you_or_anyone_in_your_household_have_a_disability_status_from_the_gov: Opt<'do_you_or_anyone_in_your_household_have_a_disability_status_from_the_gov'> | undefined,
	why_dont_they_have_status: Opt<'why_dont_they_have_status'> | undefined,
	please_specifywhy_dont_they_have_status: string | undefined,
	do_you_or_anyone_in_your_household_receive_state_allowance_for_disability: Opt<'do_you_or_anyone_in_your_household_receive_state_allowance_for_disability'> | undefined,
	does_the_household_host_children_who_are_relatives: Opt<'does_the_household_host_children_who_are_relatives'> | undefined,
	does_the_household_host_children_who_are_not_relatives: Opt<'does_the_household_host_children_who_are_not_relatives'> | undefined,
	do_you_identify_as_any_of_the_following: Opt<'do_you_identify_as_any_of_the_following'> | undefined,
	are_you: Opt<'are_you'> | undefined,
	what_is_your_area_of_origin_oblast: Opt<'what_is_your_area_of_origin_oblast'> | undefined,
	what_is_your_area_of_origin_raion: Opt<'what_is_your_area_of_origin_raion'> | undefined,
	what_is_your_area_of_origin_hromada: Opt<'what_is_your_area_of_origin_hromada'> | undefined,
	why_did_you_leave_your_area_of_origin: Opt<'why_did_you_leave_your_area_of_origin'> | undefined,
	please_specifywhy_did_you_leave_your_area_of_origin: string | undefined,
	when_did_you_leave_your_area_of_origin: Date | undefined,
	how_did_you_travel_to_your_displacement_location: Opt<'how_did_you_travel_to_your_displacement_location'> | undefined,
	please_specifyhow_did_you_travel_to_your_displacement_location: string | undefined,
	when_did_you_first_leave_your_area_of_origin: Date | undefined,
	when_did_you_return_to_your_area_of_origin: Date | undefined,
	why_did_you_decide_to_return_to_your_area_of_origin: Opt<'why_did_you_decide_to_return_to_your_area_of_origin'> | undefined,
	please_specifywhy_did_you_decide_to_return_to_your_area_of_origin: string | undefined,
	have_you_received_any_form_of_compensation_for_leaving_your_area_of_origin: Opt<'have_you_received_any_form_of_compensation_for_leaving_your_area_of_origin'> | undefined,
	have_you_received_any_form_of_compensation_for_returnee_your_area_of_origin: Opt<'have_you_received_any_form_of_compensation_for_returnee_your_area_of_origin'> | undefined,
	was_your_movement_to_return_to_your_area_of_origin_supported_or_facilitated_by_any_of_the_following: Opt<'was_your_movement_to_return_to_your_area_of_origin_supported_or_facilitated_by_any_of_the_following'> | undefined,
	please_specifywas_your_movement_to_return_to_your_area_of_origin_supported_or_facilitated_by_any_of_the_following: string | undefined,
	did_you_or_any_member_of_your_household_on_your_displacement_journey_experience_safety_or_security_concerns: Opt<'did_you_or_any_member_of_your_household_on_your_displacement_journey_experience_safety_or_security_concerns'> | undefined,
	please_specifydid_you_or_any_member_of_your_household_on_your_displacement_journey_experience_safety_or_security_concerns: string | undefined,
	have_you_been_displaced_prior_to_your_current_displacement: Opt<'have_you_been_displaced_prior_to_your_current_displacement'> | undefined,
	what_are_your_households_intentions_in_terms_of_place_of_residence: Opt<'what_are_your_households_intentions_in_terms_of_place_of_residence'> | undefined,
	what_factors_would_be_key_to_support_your_successful_integration_into_the_local_community: Opt<'what_factors_would_be_key_to_support_your_successful_integration_into_the_local_community'> | undefined,
	please_specifywhat_factors_would_be_key_to_support_your_successful_integration_into_the_local_community: string | undefined,
	what_would_be_the_deciding_factor_in_your_return_to_your_area_of_origin: Opt<'what_would_be_the_deciding_factor_in_your_return_to_your_area_of_origin'> | undefined,
	why_are_planning_to_relocate_from_your_current_place_of_residence: Opt<'why_are_planning_to_relocate_from_your_current_place_of_residence'> | undefined,
	please_specifywhy_are_planning_to_relocate_from_your_current_place_of_residence: string | undefined,
	as_nonUkrainian_do_you_have_documentation: Opt<'as_nonUkrainian_do_you_have_documentation'> | undefined,
	as_stateless_person_household_do_you_have_a_stateless_registration_certificate: Opt<'as_stateless_person_household_do_you_have_a_stateless_registration_certificate'> | undefined,
	are_you_and_your_hh_members_registered_as_idps: Opt<'are_you_and_your_hh_members_registered_as_idps'> | undefined,
	is_member_1_registered: Opt<'is_member_1_registered'> | undefined,
	does_1_lack_doc: Opt<'does_1_lack_doc'> | undefined,
	please_specifydoes_1_lack_doc: string | undefined,
	is_member_2_registered: Opt<'is_member_2_registered'> | undefined,
	does_2_lack_doc: Opt<'does_2_lack_doc'> | undefined,
	please_specifydoes_2_lack_doc: string | undefined,
	is_member_3_registered: Opt<'is_member_3_registered'> | undefined,
	does_3_lack_doc: Opt<'does_3_lack_doc'> | undefined,
	please_specifydoes_3_lack_doc: string | undefined,
	is_member_4_registered: Opt<'is_member_4_registered'> | undefined,
	does_4_lack_doc: Opt<'does_4_lack_doc'> | undefined,
	please_specifydoes_4_lack_doc: string | undefined,
	is_member_5_registered: Opt<'is_member_5_registered'> | undefined,
	does_5_lack_doc: Opt<'does_5_lack_doc'> | undefined,
	please_specifydoes_5_lack_doc: string | undefined,
	is_member_6_registered: Opt<'is_member_6_registered'> | undefined,
	does_6_lack_doc: Opt<'does_6_lack_doc'> | undefined,
	please_specifydoes_6_lack_doc: string | undefined,
	is_member_7_registered: Opt<'is_member_7_registered'> | undefined,
	does_7_lack_doc: Opt<'does_7_lack_doc'> | undefined,
	please_specifydoes_7_lack_doc: string | undefined,
	is_member_8_registered: Opt<'is_member_8_registered'> | undefined,
	does_8_lack_doc: Opt<'does_8_lack_doc'> | undefined,
	please_specifydoes_8_lack_doc: string | undefined,
	is_member_9_registered: Opt<'is_member_9_registered'> | undefined,
	does_9_lack_doc: Opt<'does_9_lack_doc'> | undefined,
	please_specifydoes_9_lack_doc: string | undefined,
	is_member_10_registered: Opt<'is_member_10_registered'> | undefined,
	does_10_lack_doc: Opt<'does_10_lack_doc'> | undefined,
	please_specifydoes_10_lack_doc: string | undefined,
	is_member_11_registered: Opt<'is_member_11_registered'> | undefined,
	does_11_lack_doc: Opt<'does_11_lack_doc'> | undefined,
	please_specifydoes_11_lack_doc: string | undefined,
	is_member_12_registered: Opt<'is_member_12_registered'> | undefined,
	does_12_lack_doc: Opt<'does_12_lack_doc'> | undefined,
	please_specifydoes_12_lack_doc: string | undefined,
	do_you_have_any_of_the_following: Opt<'do_you_have_any_of_the_following'> | undefined,
	do_you_and_your_hh_members_receive_the_idp_allowance: Opt<'do_you_and_your_hh_members_receive_the_idp_allowance'> | undefined,
	why_they_do_not_receive: Opt<'why_they_do_not_receive'> | undefined,
	please_specifywhy_they_do_not_receive: string | undefined,
	why_are_you_not_registered: Opt<'why_are_you_not_registered'> | undefined,
	please_specifywhy_are_you_not_registered: string | undefined,
	why_not_registered: Opt<'why_not_registered'> | undefined,
	please_specifywhy_not_registered: string | undefined,
	what_housing_land_and_property_documents_do_you_lack: Opt<'what_housing_land_and_property_documents_do_you_lack'> | undefined,
	please_specifywhat_housing_land_and_property_documents_do_you_lack: string | undefined,
	have_you_experienced_any_barriers_in_obtaining_or_accessing_identity_documentation_and_or_hlp_documentation: Opt<'have_you_experienced_any_barriers_in_obtaining_or_accessing_identity_documentation_and_or_hlp_documentation'> | undefined,
	please_specifyhave_you_experienced_any_barriers_in_obtaining_or_accessing_identity_documentation_and_or_hlp_documentation: string | undefined,
	please_rate_your_sense_of_safety_in_this_location: Opt<'please_rate_your_sense_of_safety_in_this_location'> | undefined,
	what_are_the_main_factors_that_make_this_location_feel_unsafe: Opt<'what_are_the_main_factors_that_make_this_location_feel_unsafe'> | undefined,
	please_specifywhat_are_the_main_factors_that_make_this_location_feel_unsafe: string | undefined,
	how_would_you_describe_the_relationship_between_member_of_the_host_community: Opt<'how_would_you_describe_the_relationship_between_member_of_the_host_community'> | undefined,
	what_factors_are_affecting_the_relationship_between_communities_in_this_location: Opt<'what_factors_are_affecting_the_relationship_between_communities_in_this_location'> | undefined,
	please_specifywhat_factors_are_affecting_the_relationship_between_communities_in_this_location: string | undefined,
	have_you_or_your_household_members_experienced_incidents_with_host_community_members_idps_returnees: Opt<'have_you_or_your_household_members_experienced_incidents_with_host_community_members_idps_returnees'> | undefined,
	please_specifyhave_you_or_your_household_members_experienced_incidents_with_host_community_members_idps_returnees: string | undefined,
	do_you_or_your_household_members_experience_any_barriers_to_movements_in_and_around_the_area: Opt<'do_you_or_your_household_members_experience_any_barriers_to_movements_in_and_around_the_area'> | undefined,
	please_specifydo_you_or_your_household_members_experience_any_barriers_to_movements_in_and_around_the_area: string | undefined,
	has_any_adult_male_member_experienced_violence: Opt<'has_any_adult_male_member_experienced_violence'> | undefined,
	what_type_of_incidents_took_place_has_any_adult_male_member_experienced_violence: Opt<'what_type_of_incidents_took_place_has_any_adult_male_member_experienced_violence'> | undefined,
	please_specifywhat_type_of_incidents_took_place_has_any_adult_male_member_experienced_violence: string | undefined,
	when_did_the_incidents_occur_has_any_adult_male_member_experienced_violence: Opt<'when_did_the_incidents_occur_has_any_adult_male_member_experienced_violence'> | undefined,
	who_were_the_perpetrators_of_the_incident_has_any_adult_male_member_experienced_violence: Opt<'who_were_the_perpetrators_of_the_incident_has_any_adult_male_member_experienced_violence'> | undefined,
	please_specifywho_were_the_perpetrators_of_the_incident_has_any_adult_male_member_experienced_violence: string | undefined,
	has_any_adult_female_member_experienced_violence: Opt<'has_any_adult_female_member_experienced_violence'> | undefined,
	what_type_of_incidents_took_place_has_any_adult_female_member_experienced_violence: Opt<'what_type_of_incidents_took_place_has_any_adult_female_member_experienced_violence'> | undefined,
	please_specifywhat_type_of_incidents_took_place_has_any_adult_female_member_experienced_violence: string | undefined,
	when_did_the_incidents_occur_has_any_adult_female_member_experienced_violence: Opt<'when_did_the_incidents_occur_has_any_adult_female_member_experienced_violence'> | undefined,
	who_were_the_perpetrators_of_the_incident_has_any_adult_female_member_experienced_violence: Opt<'who_were_the_perpetrators_of_the_incident_has_any_adult_female_member_experienced_violence'> | undefined,
	please_specifywho_were_the_perpetrators_of_the_incident_has_any_adult_female_member_experienced_violence: string | undefined,
	has_any_boy_member_experienced_violence: Opt<'has_any_boy_member_experienced_violence'> | undefined,
	what_type_of_incidents_took_place_has_any_boy_member_experienced_violence: Opt<'what_type_of_incidents_took_place_has_any_boy_member_experienced_violence'> | undefined,
	please_specifywhat_type_of_incidents_took_place_has_any_boy_member_experienced_violence: string | undefined,
	when_did_the_incidents_occur_has_any_boy_member_experienced_violence: Opt<'when_did_the_incidents_occur_has_any_boy_member_experienced_violence'> | undefined,
	who_were_the_perpetrators_of_the_incident_has_any_boy_member_experienced_violence: Opt<'who_were_the_perpetrators_of_the_incident_has_any_boy_member_experienced_violence'> | undefined,
	please_specifywho_were_the_perpetrators_of_the_incident_has_any_boy_member_experienced_violence: string | undefined,
	has_any_girl_member_experienced_violence: Opt<'has_any_girl_member_experienced_violence'> | undefined,
	what_type_of_incidents_took_place_has_any_girl_member_experienced_violence: Opt<'what_type_of_incidents_took_place_has_any_girl_member_experienced_violence'> | undefined,
	please_specifywhat_type_of_incidents_took_place_has_any_girl_member_experienced_violence: string | undefined,
	when_did_the_incidents_occur_has_any_girl_member_experienced_violence: Opt<'when_did_the_incidents_occur_has_any_girl_member_experienced_violence'> | undefined,
	who_were_the_perpetrators_of_the_incident_has_any_girl_member_experienced_violence: Opt<'who_were_the_perpetrators_of_the_incident_has_any_girl_member_experienced_violence'> | undefined,
	please_specifywho_were_the_perpetrators_of_the_incident_has_any_girl_member_experienced_violence: string | undefined,
	has_any_other_member_experienced_violence: Opt<'has_any_other_member_experienced_violence'> | undefined,
	what_type_of_incidents_took_place_has_any_other_member_experienced_violence: Opt<'what_type_of_incidents_took_place_has_any_other_member_experienced_violence'> | undefined,
	please_specifywhat_type_of_incidents_took_place_has_any_other_member_experienced_violence: string | undefined,
	when_did_the_incidents_occur_has_any_other_member_experienced_violence: Opt<'when_did_the_incidents_occur_has_any_other_member_experienced_violence'> | undefined,
	who_were_the_perpetrators_of_the_incident_has_any_other_member_experienced_violence: Opt<'who_were_the_perpetrators_of_the_incident_has_any_other_member_experienced_violence'> | undefined,
	please_specifywho_were_the_perpetrators_of_the_incident_has_any_other_member_experienced_violence: string | undefined,
	do_you_or_members_of_your_household_experience_discrimination_or_stigmatization_in_your_current_area_of_residence: Opt<'do_you_or_members_of_your_household_experience_discrimination_or_stigmatization_in_your_current_area_of_residence'> | undefined,
	on_what_ground: Opt<'on_what_ground'> | undefined,
	please_specifyon_what_ground: string | undefined,
	is_are_any_adult_memberof_your_household_displaying_any_of_the_following_signs: Opt<'is_are_any_adult_memberof_your_household_displaying_any_of_the_following_signs'> | undefined,
	please_specifyis_are_any_adult_memberof_your_household_displaying_any_of_the_following_signs: string | undefined,
	is_are_any_child_member_of_your_household_displaying_any_of_the_following_signs: Opt<'is_are_any_child_member_of_your_household_displaying_any_of_the_following_signs'> | undefined,
	please_specifyis_are_any_child_member_of_your_household_displaying_any_of_the_following_signs: string | undefined,
	do_household_members_experiencing_distress_have_access_to_relevant_care_and_services: Opt<'do_household_members_experiencing_distress_have_access_to_relevant_care_and_services'> | undefined,
	what_are_the_barriers_to_access_services: Opt<'what_are_the_barriers_to_access_services'> | undefined,
	please_specifywhat_are_the_barriers_to_access_services: string | undefined,
	what_do_you_think_feel_are_the_major_stress_factors_for_you_and_your_household_members: Opt<'what_do_you_think_feel_are_the_major_stress_factors_for_you_and_your_household_members'> | undefined,
	please_specifywhat_do_you_think_feel_are_the_major_stress_factors_for_you_and_your_household_members: string | undefined,
	what_are_the_main_sources_of_income_of_your_household: Opt<'what_are_the_main_sources_of_income_of_your_household'> | undefined,
	please_specifywhat_are_the_main_sources_of_income_of_your_household: string | undefined,
	what_type_of_allowances_do_you_receive: Opt<'what_type_of_allowances_do_you_receive'> | undefined,
	please_specifywhat_type_of_allowances_do_you_receive: string | undefined,
	what_is_the_average_month_income_per_household: Opt<'what_is_the_average_month_income_per_household'> | undefined,
	including_yourself_are_there_members_of_your_household_who_are_out_of_work_and_seeking_employment: Opt<'including_yourself_are_there_members_of_your_household_who_are_out_of_work_and_seeking_employment'> | undefined,
	what_are_the_reasons_for_being_out_of_work: Opt<'what_are_the_reasons_for_being_out_of_work'> | undefined,
	please_specifywhat_are_the_reasons_for_being_out_of_work: string | undefined,
	are_there_gaps_in_meeting_your_basic_needs: Opt<'are_there_gaps_in_meeting_your_basic_needs'> | undefined,
	what_are_the_strategies_that_your_household_uses_to_cope_with_these_challenges: Opt<'what_are_the_strategies_that_your_household_uses_to_cope_with_these_challenges'> | undefined,
	please_specifywhat_are_the_strategies_that_your_household_uses_to_cope_with_these_challenges: string | undefined,
	are_schoolaged_children_in_your_household_regularly_attending_primary_or_secondary_education: Opt<'are_schoolaged_children_in_your_household_regularly_attending_primary_or_secondary_education'> | undefined,
	is_it: Opt<'is_it'> | undefined,
	what_are_the_reasons_preventing_children_in_your_household_from_regularly_attending_education_services: Opt<'what_are_the_reasons_preventing_children_in_your_household_from_regularly_attending_education_services'> | undefined,
	please_specifywhat_are_the_reasons_preventing_children_in_your_household_from_regularly_attending_education_services: string | undefined,
	what_is_your_current_housing_structure: Opt<'what_is_your_current_housing_structure'> | undefined,
	what_is_the_tenure_status_of_your_accommodation_private: Opt<'what_is_the_tenure_status_of_your_accommodation_private'> | undefined,
	please_specifywhat_is_the_tenure_status_of_your_accommodation_private: string | undefined,
	what_is_the_tenure_status_of_your_accommodation_public: Opt<'what_is_the_tenure_status_of_your_accommodation_public'> | undefined,
	please_specifywhat_is_the_tenure_status_of_your_accommodation_public: string | undefined,
	do_you_have_formal_rental_documents_to_stay_in_your_accommodation: Opt<'do_you_have_formal_rental_documents_to_stay_in_your_accommodation'> | undefined,
	what_is_the_general_condition_of_your_accommodation: Opt<'what_is_the_general_condition_of_your_accommodation'> | undefined,
	what_are_your_main_concerns_regarding_your_accommodation: Opt<'what_are_your_main_concerns_regarding_your_accommodation'> | undefined,
	do_you_have_access_to_health_care_in_your_current_location: Opt<'do_you_have_access_to_health_care_in_your_current_location'> | undefined,
	what_are_the_barriers_to_accessing_health_services: Opt<'what_are_the_barriers_to_accessing_health_services'> | undefined,
	please_specifywhat_are_the_barriers_to_accessing_health_services: string | undefined,
	what_is_your_1_priority: Opt<'what_is_your_1_priority'> | undefined,
	please_specifywhat_is_your_1_priority: string | undefined,
	what_is_your_2_priority: Opt<'what_is_your_2_priority'> | undefined,
	please_specifywhat_is_your_2_priority: string | undefined,
	what_is_your_3_priority: Opt<'what_is_your_3_priority'> | undefined,
	please_specifywhat_is_your_3_priority: string | undefined,
	additional_information_shared_by_respondent: string | undefined,
	comments_observations_of_the_protection_monitor: string | undefined,
	need_for_assistance: Opt<'need_for_assistance'> | undefined,
}